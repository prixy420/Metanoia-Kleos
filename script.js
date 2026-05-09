let map;
let markers = [];
let polyline;
const infoPanel = document.getElementById('info-panel');
const closeBtn = document.querySelector('.close-btn');

// Initialize map
function initMap() {
    map = L.map('map').setView([12.8797, 121.7740], 6);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        minZoom: 3
    }).addTo(map);

    addMarkers();
    drawTimeline();
}

// Color mapping for years
const yearColors = {
    2022: '#ff6b6b',
    2023: '#4ecdc4',
    2024: '#ffd93d',
    2025: '#6bcf7f',
    2026: '#9b59b6'
};

// Create custom icons
function createIcon(year) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background: ${yearColors[year]};
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 4px solid white;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            cursor: pointer;
        ">${year % 100}</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });
}

// Add markers from data
function addMarkers() {
    journeyData.forEach((location, index) => {
        const marker = L.marker([location.lat, location.lng], {
            icon: createIcon(location.year)
        }).addTo(map);

        marker.data = location;
        marker.index = index;

        marker.on('click', function() {
            showInfo(location);
            map.setView([location.lat, location.lng], 8, { animate: true });
        });

        markers.push(marker);
    });
}

// Draw timeline line connecting all points
function drawTimeline() {
    const coordinates = journeyData.map(loc => [loc.lat, loc.lng]);
    polyline = L.polyline(coordinates, {
        color: 'rgba(102, 126, 234, 0.5)',
        weight: 3,
        opacity: 0.6,
        dashArray: '10, 5'
    }).addTo(map);
}

// Show info panel
function showInfo(location) {
    document.getElementById('place-name').textContent = location.name;
    document.getElementById('place-date').textContent = `${location.year} • ${location.category}`;
    document.getElementById('place-description').textContent = location.description;

    // Add gallery
    const gallery = document.getElementById('images-gallery');
    gallery.innerHTML = '';
    location.images.forEach(img => {
        const img_elem = document.createElement('img');
        img_elem.src = img;
        img_elem.alt = location.name;
        img_elem.className = 'gallery-item';
        img_elem.onclick = () => openModal(img);
        gallery.appendChild(img_elem);
    });

    // Add stats
    const stats = document.getElementById('place-stats');
    stats.innerHTML = `
        <p><strong>📍 Location:</strong> ${location.location}</p>
        <p><strong>👥 Participants:</strong> ${location.participants}</p>
        <p><strong>📊 Impact:</strong> ${location.impact}</p>
    `;

    infoPanel.classList.remove('hidden');
}

// Close panel
closeBtn.addEventListener('click', () => {
    infoPanel.classList.add('hidden');
});

// Image modal
function openModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'image-modal active';
    modal.innerHTML = `
        <div class="image-modal-content">
            <button class="close-modal">&times;</button>
            <img src="${imageSrc}" alt="Full size">
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ESC key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        infoPanel.classList.add('hidden');
    }
});

// Initialize on load
window.addEventListener('load', initMap);
