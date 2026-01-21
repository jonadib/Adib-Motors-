import React, { useMemo } from 'react';

function HallOfFame() {
    const helmetImages = [
        '/helmet/helmet-collection1.png',
        '/helmet/helmet-collection2.png',
        '/helmet/helmet-collection3.png',
        '/helmet/helmet-collection4.png',
        '/helmet/helmet-collection5.png',
        '/helmet/helmet-collection6.png',
        '/helmet/helmet-collection7.png',
        '/helmet/helmet-collection8.png',
        '/helmet/helmet-collection9.png',
        '/helmet/helmet-collection10.png',
        '/helmet/helmet-collection11.png',
        '/helmet/helmet-collection12.png',
        '/helmet/helmet-collection13.png',
        '/helmet/helmet-collection14.png',
        '/helmet/helmet-collection15.png',
        '/helmet/helmet-collection16.png',
        '/helmet/helmet-collection17.png',
        '/helmet/helmet-collection18.png',
        '/helmet/helmet-collection19.png',
        '/helmet/helmet-collection20.png',
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
                        <img src={helmet.img} className="helmet-img" alt={`Helmet ${index + 1}`} />
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
