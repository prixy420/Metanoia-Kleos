const schoolsData = [
    {
        name: "St. Mary's School",
        year: 2022,
        lat: 12.9716,
        lng: 77.5946,
        location: "Whitefield, Bangalore",
        type: "School",
        description: "Our first counseling session introducing the 5 pillars of mental health awareness to students.",
        childrenCounselled: 120,
        sessions: 4,
        topics: ['Good Touch - Bad Touch', 'Self-Esteem Building'],
        images: [
            'https://images.unsplash.com/photo-1427504494785-cdab38d3a5ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop'
        ]
    },
    {
        name: "Bangalore Orphanage Center",
        year: 2022,
        lat: 13.0827,
        lng: 77.6054,
        location: "Indiranagar, Bangalore",
        type: "Orphanage",
        description: "Conducted initial sessions focusing on emotional support and trauma healing for children.",
        childrenCounselled: 85,
        sessions: 3,
        topics: ['Depression Support', 'Self-Esteem Building'],
        images: [
            'https://images.unsplash.com/photo-1427504494785-cdab38d3a5ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop'
        ]
    },
    {
        name: "Delhi Public School",
        year: 2023,
        lat: 12.9352,
        lng: 77.6245,
        location: "Bangalore East",
        type: "School",
        description: "Expanded program with comprehensive sessions on bullying awareness and anxiety management.",
        childrenCounselled: 450,
        sessions: 8,
        topics: ['Bullying Awareness', 'Anxiety Management', 'Self-Esteem Building'],
        images: [
            'https://images.unsplash.com/photo-1427504494785-cdab38d3a5ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop'
        ]
    },
    {
        name: "Vibrant Learning Center",
        year: 2023,
        lat: 13.1939,
        lng: 77.7064,
        location: "Sarjapur Road, Bangalore",
        type: "Learning Center",
        description: "Interactive sessions with focus on depression awareness and peer support building.",
        childrenCounselled: 320,
        sessions: 6,
        topics: ['Depression Support', 'Good Touch - Bad Touch', 'Self-Esteem Building'],
        images: [
            'https://images.unsplash.com/photo-1427504494785-cdab38d3a5ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop'
        ]
    },
    {
        name: "Bangalore International School",
        year: 2024,
        lat: 12.9250,
        lng: 77.6245,
        location: "Koramangala, Bangalore",
        type: "School",
        description: "Large-scale awareness campaign covering all 5 pillars with workshops and interactive sessions.",
        childrenCounselled: 1200,
        sessions: 12,
        topics: ['Good Touch - Bad Touch', 'Bullying Awareness', 'Depression Support', 'Anxiety Management', 'Self-Esteem Building'],
        images: [
            'https://images.unsplash.com/photo-1427504494785-cdab38d3a5ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop'
        ]
    },
    {
        name: "Hope Children's Home",
        year: 2024,
        lat: 12.8395,
        lng: 77.6245,
        location: "Electronic City, Bangalore",
        type: "Orphanage",
        description: "Specialized counseling and ongoing support programs for vulnerable children.",
        childrenCounselled: 280,
        sessions: 10,
        topics: ['Depression Support', 'Anxiety Management', 'Self-Esteem Building'],
        images: [
            'https://images.unsplash.com/photo-1427504494785-cdab38d3a5ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop'
        ]
    },
    {
        name: "Cambridge School Bangalore",
        year: 2025,
        lat: 13.0827,
        lng: 77.5740,
        location: "Yeshwantpur, Bangalore",
        type: "School",
        description: "Integrated mental health curriculum implementation with teacher training.",
        childrenCounselled: 2100,
        sessions: 15,
        topics: ['All 5 Pillars'],
        images: [
            'https://images.unsplash.com/photo-1427504494785-cdab38d3a5ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop'
        ]
    },
    {
        name: "Little Stars Orphanage",
        year: 2025,
        lat: 12.9450,
        lng: 77.7500,
        location: "Marathahalli, Bangalore",
        type: "Orphanage",
        description: "Comprehensive mental health support and long-term counseling programs.",
        childrenCounselled: 420,
        sessions: 20,
        topics: ['All 5 Pillars'],
        images: [
            'https://images.unsplash.com/photo-1427504494785-cdab38d3a5ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop'
        ]
    },
    {
        name: "Spring Dale Global School",
        year: 2026,
        lat: 12.8730,
        lng: 77.6945,
        location: "CV Raman Nagar, Bangalore",
        type: "School",
        description: "Advanced initiatives with student peer counselor training and mental health leadership programs.",
        childrenCounselled: 1800,
        sessions: 18,
        topics: ['All 5 Pillars'],
        images: [
            'https://images.unsplash.com/photo-1427504494785-cdab38d3a5ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop'
        ]
    },
    {
        name: "Joyful Kids Center",
        year: 2026,
        lat: 13.1450,
        lng: 77.5750,
        location: "Ramamurthy Nagar, Bangalore",
        type: "Learning Center",
        description: "Holistic wellness programs integrating counseling with art, music, and sports therapy.",
        childrenCounselled: 650,
        sessions: 22,
        topics: ['All 5 Pillars'],
        images: [
            'https://images.unsplash.com/photo-1427504494785-cdab38d3a5ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop'
        ]
    }
];
