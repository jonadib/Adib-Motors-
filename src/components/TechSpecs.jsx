function TechSpecs() {
    const hotspots = [
        {
            id: 'helmet',
            className: 'hs-helmet',
            category: 'Helmet',
            code: 'AGV-X3000',
            title: 'Pista GP RR',
            desc: 'Carbon fiber shell with advanced ventilation system.',
            stats: ['ECE 22.06', 'Carbon']
        },
        {
            id: 'glove',
            className: 'hs-glove',
            category: 'Gloves',
            code: 'ALP-GP',
            title: 'GP Pro R3',
            desc: 'Premium leather with knuckle protection and touchscreen compatibility.',
            stats: ['Leather', 'CE Level 2']
        },
        {
            id: 'boot',
            className: 'hs-boot',
            category: 'Boots',
            code: 'SMX-PLUS',
            title: 'SMX Plus V2',
            desc: 'Microfiber construction with reinforced toe and heel protection.',
            stats: ['CE Certified', 'Microfiber']
        }
    ];

    return (
        <div className="tech-section">
            <div className="tech-header">
                <h2 className="tech-title">
                    Tech <span className="text-serif" style={{ fontWeight: 400, fontStyle: 'italic' }}>Specs</span>
                </h2>
                <p className="tech-subtitle">
                    Explore the technical specifications of professional equipment. Hover or click the points to discover more.
                </p>
            </div>

            <div className="rider-container">
                <img src="/collection/el.webp" className="rider-image" alt="Rider with Bike" loading="lazy" />

                {hotspots.map((spot) => (
                    <div key={spot.id} className={`hotspot ${spot.className}`}>
                        <div className="hotspot-inner"></div>
                        <div className="tech-card">
                            <div className="card-header">
                                <span>{spot.category}</span>
                                <span>{spot.code}</span>
                            </div>
                            <div className="card-title">{spot.title}</div>
                            <div className="card-desc">{spot.desc}</div>
                            <div className="card-stats">
                                {spot.stats.map((stat, idx) => (
                                    <span key={idx} className="stat-badge">{stat}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechSpecs;
