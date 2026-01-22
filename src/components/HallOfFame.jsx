import React, { useMemo } from 'react';

function HallOfFame() {
    const helmetImages = [
        '/helmet/helmet-collection1.webp',
        '/helmet/helmet-collection2.webp',
        '/helmet/helmet-collection3.webp',
        '/helmet/helmet-collection4.webp',
        '/helmet/helmet-collection5.webp',
        '/helmet/helmet-collection6.webp',
        '/helmet/helmet-collection7.webp',
        '/helmet/helmet-collection8.webp',
        '/helmet/helmet-collection9.webp',
        '/helmet/helmet-collection10.webp',
        '/helmet/helmet-collection11.webp',
        '/helmet/helmet-collection12.webp',
        '/helmet/helmet-collection13.webp',
        '/helmet/helmet-collection14.webp',
        '/helmet/helmet-collection15.webp',
        '/helmet/helmet-collection16.webp',
        '/helmet/helmet-collection17.webp',
        '/helmet/helmet-collection18.webp',
        '/helmet/helmet-collection19.webp',
        '/helmet/helmet-collection20.webp',
    ];

    const helmets = useMemo(() => {
        return helmetImages.map((img) => {
            const year = Math.floor(Math.random() * (2025 - 2018 + 1)) + 2018;
            const locations = ["Silverstone", "Monaco", "Monza", "Spa", "Suzuka", "Austin", "Interlagos", "Le Mans", "Catalunya", "Sepang"];
            const location = locations[Math.floor(Math.random() * locations.length)];
            return {
                img,
                year,
                location
            };
        });
    }, []);

    return (
        <section className="hall-of-fame-section">
            <div className="hof-header">
                <div className="hof-title-container">
                    <span className="hof-title-main">Helmets</span>
                    <span className="hof-title-sub">Hall of Fame</span>
                </div>
                <p className="hof-desc">
                    A curated collection of iconic helmets from legendary races and unforgettable moments on the track.
                </p>
            </div>

            <div className="helmet-grid">
                {helmets.map((helmet, index) => (
                    <div key={index} className="helmet-card">
                        <img src={helmet.img} className="helmet-img" alt={`Helmet ${index + 1}`} loading="lazy" />
                        <div className="helmet-info">
                            <span className="helmet-year">{helmet.year}</span>
                            <span className="helmet-separator">•</span>
                            <span className="helmet-location">{helmet.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HallOfFame;
