const clockContainer = document.getElementById('clocksContainer');
const timezoneInput = document.getElementById('timezoneInput');
let clockCount = 0;
const gradients = ['gradient1', 'gradient2', 'gradient3', 'gradient4', 'gradient5', 'gradient6', 'gradient7', 'gradient8'];

// Common timezone aliases
const aliases = {
    'ny': 'America/New_York',
    'la': 'America/Los_Angeles',
    'chicago': 'America/Chicago',
    'denver': 'America/Denver',
    'london': 'Europe/London',
    'paris': 'Europe/Paris',
    'berlin': 'Europe/Berlin',
    'tokyo': 'Asia/Tokyo',
    'sydney': 'Australia/Sydney',
    'dubai': 'Asia/Dubai',
    'singapore': 'Asia/Singapore',
    'hong kong': 'Asia/Hong_Kong',
    'bangkok': 'Asia/Bangkok',
    'mumbai': 'Asia/Kolkata',
    'auckland': 'Pacific/Auckland'
};

function addClock(timezone) {
    if (clockCount >= 8) {
        alert('Maximum 8 clocks at a time!');
        return;
    }

    const clockCard = document.createElement('div');
    clockCard.className = `clock-card ${gradients[clockCount % gradients.length]}`;
    clockCard.id = `clock-${clockCount}`;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-clock';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => clockCard.remove();

    const citySpan = document.createElement('div');
    citySpan.className = 'clock-city';

    const timeSpan = document.createElement('div');
    timeSpan.className = 'clock-time';

    const dateSpan = document.createElement('div');
    dateSpan.className = 'clock-date';

    const offsetSpan = document.createElement('div');
    offsetSpan.className = 'clock-offset';

    clockCard.appendChild(closeBtn);
    clockCard.appendChild(citySpan);
    clockCard.appendChild(timeSpan);
    clockCard.appendChild(dateSpan);
    clockCard.appendChild(offsetSpan);
    clockContainer.appendChild(clockCard);

    clockCount++;

    // Update time immediately and every second
    function updateClock() {
        try {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            const dateFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });

            timeSpan.textContent = formatter.format(now);
            dateSpan.textContent = dateFormatter.format(now);

            // Get timezone offset
            const parts = formatter.formatToParts(now);
            const gmtTime = new Date().toLocaleString('en-US', { hour12: false, timeZone: 'UTC' });
            const localTime = new Date().toLocaleString('en-US', { hour12: false, timeZone: timezone });
            
            const tzTime = Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
            }).format(new Date());

            const tzCity = timezone.split('/')[1] || timezone;
            citySpan.textContent = tzCity.replace(/_/g, ' ');

            // Calculate offset (simplified)
            const offset = new Date().toLocaleString('en-US', { timeZone: timezone, timeZoneName: 'short' }).split(' ').pop();
            offsetSpan.textContent = `UTC ${offset}`;
        } catch (e) {
            timeSpan.textContent = 'Invalid';
            dateSpan.textContent = 'Timezone';
        }
    }

    updateClock();
    setInterval(updateClock, 1000);
}

function addCustomTimezone() {
    let timezone = timezoneInput.value.trim().toLowerCase();
    
    if (!timezone) {
        alert('Please enter a timezone');
        return;
    }

    // Check if it's an alias
    if (aliases[timezone]) {
        timezone = aliases[timezone];
    } else {
        // Capitalize properly (America/New_York format)
        timezone = timezone.split('/').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('/');
    }

    try {
        // Test if timezone is valid
        new Intl.DateTimeFormat('en-US', { timeZone: timezone });
        addClock(timezone);
        timezoneInput.value = '';
    } catch (e) {
        alert('Invalid timezone. Examples: America/New_York, Europe/London, Asia/Tokyo');
    }
}

// Allow Enter key to add timezone
timezoneInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addCustomTimezone();
    }
});

// Add default clocks on load
window.addEventListener('load', () => {
    addClock(Intl.DateTimeFormat().resolvedOptions().timeZone); // User's local timezone
});
