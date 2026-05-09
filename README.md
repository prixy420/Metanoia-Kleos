# Metanoia Kleos Empowerment Foundation - Mental Health Interactive Journey Map

🧠 An interactive map showcasing the mental health counseling journey of Metanoia Kleos across Bangalore schools and orphanages from 2022 to 2026.

## ✨ Features

✅ **Interactive School Pinpoints** - Click on any school or orphanage to see:
- Detailed counseling sessions information
- Number of children counselled
- Topics covered from the 5 pillars
- Gallery of session images
- Location details

✅ **Year-Based Filtering** - Click on years (2022-2026) to:
- View only locations visited in that year
- See impact numbers for that year
- Animated counter showing children helped

✅ **Impact Counter** - Real-time animated counter showing:
- 2022: 50 children helped
- 2023: 1,000 children helped
- 2024: 10,000 children helped
- 2025: 50,000 children helped
- 2026: 80,000 children helped

✅ **5 Pillars of Support**:
- 🤝 Good Touch - Bad Touch
- 🛡️ Bullying Awareness
- 💭 Depression Support
- 😰 Anxiety Management
- ✨ Self-Esteem Building

✅ **Beautiful UI**:
- Roboto font throughout
- Gradient sidebar with organization info
- Responsive design
- Smooth animations and transitions
- Modal popups for location details

## 📁 Files

- `index.html` - Main interactive map page
- `styles.css` - Modern responsive styling
- `script.js` - Map interactivity and filtering
- `data.js` - Schools and counseling session data
- `README.md` - Documentation

## 🎯 How to Use

1. **View Schools on Map** - Colored pinpoints represent different years
2. **Click a Pinpoint** - See detailed information about counseling sessions
3. **Filter by Year** - Click year buttons to see locations visited that year
4. **Check Impact** - The counter updates to show how many were helped that year
5. **View Images** - Gallery images pop up in the modal, click to expand

## 🎨 Customization

### Update Logo
Replace the placeholder logo URL in `index.html`:
```html
<img src="YOUR_LOGO_URL" alt="Metanoia Kleos Logo" class="logo">
```

### Add New Schools
Add to `data.js`:
```javascript
{
    name: "School Name",
    year: 2026,
    lat: 12.9716,
    lng: 77.5946,
    location: "Area, Bangalore",
    type: "School" or "Orphanage",
    description: "Description of sessions",
    childrenCounselled: 100,
    sessions: 5,
    topics: ['Topic1', 'Topic2'],
    images: ['image-url-1', 'image-url-2', 'image-url-3']
}
```

### Update Website Link
In `index.html`, change:
```html
<a href="https://www.yourwebsite.com" target="_blank" class="website-link">
```

## 🛠️ Technologies

- **Leaflet.js** - Interactive mapping
- **OpenStreetMap** - Free map tiles
- **Roboto Font** - Modern typography
- **Vanilla JavaScript** - No build required
- **CSS3** - Beautiful gradients and animations

## 📍 Current Locations Covered

- St. Mary's School (Whitefield)
- Bangalore Orphanage Center (Indiranagar)
- Delhi Public School (Bangalore East)
- Vibrant Learning Center (Sarjapur Road)
- Bangalore International School (Koramangala)
- Hope Children's Home (Electronic City)
- Cambridge School Bangalore (Yeshwantpur)
- Little Stars Orphanage (Marathahalli)
- Spring Dale Global School (CV Raman Nagar)
- Joyful Kids Center (Ramamurthy Nagar)

## 💝 Our Mission

To provide accessible mental health counseling and awareness to children and adults, focusing on holistic well-being through our 5 pillars of support.

## 📧 Contact

Visit: www.metanoiakleos.org
