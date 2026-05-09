const journeyData = [
    {
        name: "Foundation Established",
        year: 2022,
        lat: 14.5995,
        lng: 120.9842,
        location: "Manila, Philippines",
        category: "Milestone",
        description: "Metanoia Kleos Empowerment Foundation was established with a vision to empower communities through sustainable development and social impact.",
        participants: "Founding Members",
        impact: "Foundation Launch",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    },
    {
        name: "First Community Program",
        year: 2022,
        lat: 10.3157,
        lng: 123.8854,
        location: "Cebu, Philippines",
        category: "Program Launch",
        description: "Launched our first community empowerment program focusing on education and livelihood development for underprivileged families.",
        participants: "500+ Beneficiaries",
        impact: "Training Programs Started",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    },
    {
        name: "Regional Expansion",
        year: 2023,
        lat: 7.0731,
        lng: 125.6121,
        location: "Davao, Philippines",
        category: "Expansion",
        description: "Expanded our operations to Mindanao, opening a regional office and starting new programs for indigenous communities.",
        participants: "1,200+ Beneficiaries",
        impact: "2 New Centers Opened",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    },
    {
        name: "Skills Training Initiative",
        year: 2023,
        lat: 10.7202,
        lng: 122.5621,
        location: "Iloilo, Philippines",
        category: "Program",
        description: "Launched comprehensive skills training in IT, hospitality, and agriculture to equip youth with market-ready competencies.",
        participants: "800+ Trainees",
        impact: "95% Employment Rate",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    },
    {
        name: "National Conference 2024",
        year: 2024,
        lat: 14.5995,
        lng: 120.9842,
        location: "Manila, Philippines",
        category: "Event",
        description: "Hosted our first National Conference bringing together 2,000+ stakeholders, partners, and beneficiaries to share impact stories and innovations.",
        participants: "2,000+ Attendees",
        impact: "50+ Partnerships Formed",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    },
    {
        name: "Women Empowerment Project",
        year: 2024,
        lat: 15.8700,
        lng: 120.5631,
        location: "Batangas, Philippines",
        category: "Program",
        description: "Dedicated focus on women's economic empowerment through microfinance, business training, and cooperative development.",
        participants: "1,500+ Women",
        impact: "250+ Businesses Started",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    },
    {
        name: "Environmental Initiative",
        year: 2024,
        lat: 8.7520,
        lng: 124.6467,
        location: "Butuan, Philippines",
        category: "Environment",
        description: "Launched reforestation and environmental conservation programs partnering with local communities to plant 100,000 trees.",
        participants: "500+ Volunteers",
        impact: "100,000 Trees Planted",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    },
    {
        name: "Healthcare Access Program",
        year: 2025,
        lat: 11.2710,
        lng: 125.0274,
        location: "Surigao, Philippines",
        category: "Health",
        description: "Expanded healthcare services with mobile clinics and health education programs reaching remote communities in Caraga region.",
        participants: "5,000+ Beneficiaries",
        impact: "40 Health Centers",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    },
    {
        name: "Education Scholarship Program",
        year: 2025,
        lat: 9.7411,
        lng: 118.7393,
        location: "General Santos, Philippines",
        category: "Education",
        description: "Established scholarship programs supporting 2,000+ underprivileged students from elementary to college level.",
        participants: "2,000+ Scholars",
        impact: "30+ Schools Partnered",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    },
    {
        name: "2026 Growth & Innovation",
        year: 2026,
        lat: 12.8761,
        lng: 121.7740,
        location: "Quezon City, Philippines",
        category: "Future Vision",
        description: "Embracing digital innovation, expanding national coverage, and strengthening impact through technology and sustainable partnerships.",
        participants: "50,000+ Lives Touched",
        impact: "15+ Provinces Covered",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    },
    {
        name: "Digital Transformation Hub",
        year: 2026,
        lat: 13.1939,
        lng: 123.7579,
        location: "Tacloban, Philippines",
        category: "Innovation",
        description: "Launched our Digital Innovation Hub to empower communities with tech skills, digital literacy, and e-commerce opportunities.",
        participants: "3,000+ Trainees",
        impact: "500+ Online Sellers",
        images: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
        ]
    }
];
