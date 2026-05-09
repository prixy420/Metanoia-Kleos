# Metanoia Kleos - Interactive Journey Map

🌍 An interactive map showcasing the journey and milestones of Metanoia Kleos Empowerment Foundation from 2022 to 2026.

## 🚀 Features

- **Interactive Pinpoints**: Click on any location to see detailed information
- **Timeline Visualization**: Dashed line connecting all journey locations chronologically
- **Color-Coded Years**: Easy visual identification from 2022-2026
- **Photo Galleries**: View images from each location
- **Detailed Info Panels**: See descriptions, statistics, and impact metrics
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 📁 Files

- `index.html` - Main interactive map page
- `styles.css` - Map styling and layout
- `script.js` - Interactive functionality
- `data.js` - Journey locations and data
- `home.html` - Landing page
- `README.md` - Documentation

## 🎯 How to Use

1. Open `index.html` in your browser (or visit the GitHub Pages link)
2. Explore the map with colored pinpoints
3. Click any pinpoint to reveal:
   - Location name and year
   - Detailed description
   - Photo gallery
   - Statistics and impact metrics
4. Click the images to view them in full size
5. Use ESC key or close button to dismiss the info panel

## 🎨 Customization

### Edit Journey Data
Modify `data.js` to add your own locations:

```javascript
{
    name: "Location Name",
    year: 2024,
    lat: 14.5995,      // Latitude
    lng: 120.9842,     // Longitude
    location: "City, Country",
    category: "Program",
    description: "Your description here",
    participants: "Number of people",
    impact: "Impact statement",
    images: [
        "image-url-1",
        "image-url-2"
    ]
}
```

### Edit Colors
Update year colors in `script.js`:

```javascript
const yearColors = {
    2022: '#ff6b6b',
    2023: '#4ecdc4',
    2024: '#ffd93d',
    2025: '#6bcf7f',
    2026: '#9b59b6'
};
```

## 🌐 Technologies Used

- **Leaflet.js** - Interactive mapping library
- **OpenStreetMap** - Free map tiles
- **Vanilla JavaScript** - No dependencies
- **CSS3** - Modern styling

## 📍 Current Locations

- Manila, Philippines (2022) - Foundation Established
- Cebu, Philippines (2022) - First Community Program
- Davao, Philippines (2023) - Regional Expansion
- Iloilo, Philippines (2023) - Skills Training Initiative
- Manila, Philippines (2024) - National Conference
- Batangas, Philippines (2024) - Women Empowerment Project
- Butuan, Philippines (2024) - Environmental Initiative
- Surigao, Philippines (2025) - Healthcare Access Program
- General Santos, Philippines (2025) - Education Scholarship Program
- Quezon City, Philippines (2026) - Growth & Innovation
- Tacloban, Philippines (2026) - Digital Transformation Hub

## 📝 License

Public - Free to use and modify

## 📧 Contact

Metanoia Kleos Empowerment Foundation
