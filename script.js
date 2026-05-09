let map;
let markers = {};
let currentYear = 'all';
const yearColors = {
    2022: '#ff6b6b',
    2023: '#4ecdc4',
    2024: '#ffd93d',
    2025: '#6bcf7f',
    2026: '#9b59b6'
};

const yearImpact = {
    2022: 50,
    2023: 1000,
    2024: 10000,
    2025: 50000,
    2026: 80000
};

// Initialize map
function initMap() {
    // Bangalore center coordinates
    map = L.map('map').setView([12.9716, 77.5946], 11);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        minZoom: 9
    }).addTo(map);

    addMarkers();
    updateImpactCounter('all');
}

// Create custom icon
function createIcon(year) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background: ${yearColors[year]};
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 4px solid white;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
            cursor: pointer;
        ">${year % 100}</div>`,
        iconSize: [45, 45],
        iconAnchor: [22, 22]
    });
}

// Add markers from data
function addMarkers() {
    schoolsData.forEach((school, index) => {
        const marker = L.marker([school.lat, school.lng], {
            icon: createIcon(school.year)
        }).addTo(map);

        marker.data = school;
        marker.index = index;

        marker.on('click', function() {
            showLocationModal(school);
        });

        markers[index] = marker;
    });
}

// Filter by year
function filterByYear(year) {
    currentYear = year;
    
    // Update active button
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-year="${year}"]`).classList.add('active');

    // Show/hide markers
    schoolsData.forEach((school, index) => {
        if (year === 'all' || school.year === year) {
            markers[index].addTo(map);
        } else {
            map.removeLayer(markers[index]);
        }
    });

    updateImpactCounter(year);
}

// Animate counter
function animateCounter(finalValue, duration = 1500) {
    const counterElement = document.getElementById('impactCounter');
    const startValue = parseInt(counterElement.textContent);
    const increment = (finalValue - startValue) / (duration / 30);
    let currentValue = startValue;
    const startTime = Date.now();

    const interval = setInterval(() => {
        currentValue += increment;
        const elapsed = Date.now() - startTime;

        if (elapsed >= duration) {
            counterElement.textContent = finalValue.toLocaleString();
            clearInterval(interval);
        } else {
            counterElement.textContent = Math.floor(currentValue).toLocaleString();
        }
    }, 30);
}

// Update impact counter
function updateImpactCounter(year) {
    let impact = 0;
    
    if (year === 'all') {
        impact = 80000; // Total
    } else if (yearImpact[year]) {
        impact = yearImpact[year];
    }

    animateCounter(impact);
}

// Show location modal
function showLocationModal(school) {
    document.getElementById('modalTitle').textContent = school.name;
    document.getElementById('modalYear').textContent = `${school.year} • ${school.type}`;
    document.getElementById('modalDescription').textContent = school.description;

    // Add gallery images
    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = '';
    school.images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = school.name;
        imgElement.className = 'gallery-image';
        imgElement.onclick = () => openImageModal(img);
        gallery.appendChild(imgElement);
    });

    // Add stats
    const stats = document.getElementById('modalStats');
    stats.innerHTML = `
        <p><strong>📍 Location:</strong> ${school.location}</p>
        <p><strong>👥 Children Counselled:</strong> ${school.childrenCounselled}</p>
        <p><strong>🎯 Topics Covered:</strong> ${school.topics.join(', ')}</p>
        <p><strong>📅 Sessions:</strong> ${school.sessions}</p>
    `;

    document.getElementById('locationModal').classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('locationModal').classList.remove('active');
}

// Open full-size image
function openImageModal(imageSrc) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 200;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    modal.innerHTML = `
        <div style="position: relative; max-width: 90%; max-height: 90%;">
            <button style="
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 32px;
                cursor: pointer;
            " onclick="this.parentElement.parentElement.remove()">&times;</button>
            <img src="${imageSrc}" alt="Full size" style="max-width: 100%; max-height: 100%; border-radius: 10px;">
        </div>
    `;
    document.body.appendChild(modal);
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// Close modal on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize on page load
window.addEventListener('load', initMap);
