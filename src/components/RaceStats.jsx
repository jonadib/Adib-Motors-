import { useState } from 'react';

function RaceStats() {
    const raceData = [
        { round: '01', location: 'Bahrain GP', date: '02 Mar', finish: 'P1', lap: '1:31.447', img: '/collection/fifteen.webp' },
        { round: '02', location: 'Saudi Arabia', date: '09 Mar', finish: 'P2', lap: '1:29.300', img: '/collection/second.webp' },
        { round: '03', location: 'Australia', date: '24 Mar', finish: 'DNF', lap: '1:19.813', img: '/collection/third.webp' },
        { round: '04', location: 'Japan GP', date: '07 Apr', finish: 'P1', lap: '1:33.700', img: '/collection/fourth.webp' },
        { round: '05', location: 'China GP', date: '21 Apr', finish: 'P1', lap: '1:35.500', img: '/collection/fifth.webp' },
        { round: '06', location: 'Miami GP', date: '05 May', finish: 'P2', lap: '1:30.100', img: '/collection/sixth.webp' },
        { round: '07', location: 'Emilia Romagna', date: '19 May', finish: 'P1', lap: '1:18.900', img: '/collection/seven.webp' },
        { round: '08', location: 'Monaco GP', date: '26 May', finish: 'P3', lap: '1:12.900', img: '/collection/eight.webp' },
        { round: '09', location: 'Canada GP', date: '09 Jun', finish: 'P1', lap: '1:14.600', img: '/collection/nine.webp' },
        { round: '10', location: 'Spain GP', date: '23 Jun', finish: 'P1', lap: '1:15.800', img: '/collection/ten.webp' },
        { round: '11', location: 'Austria GP', date: '30 Jun', finish: 'P2', lap: '1:06.900', img: '/collection/el.webp' },
        { round: '12', location: 'British GP', date: '07 Jul', finish: 'P1', lap: '1:28.500', img: '/collection/twelve.webp' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(raceData[0].img);
    const [imageOpacity, setImageOpacity] = useState(1);

    const handleRowHover = (index, img) => {
        setActiveIndex(index);
        setImageOpacity(0);
        setTimeout(() => {
            setCurrentImage(img);
            setImageOpacity(1);
        }, 150);
    };

    return (
        <section className="race-section">
            <div className="race-header-wrap">
                <div className="race-title-row">
                    <span className="race-title-bold">2024</span>
                    <span className="race-title-italic">Season</span>
                </div>
                <p className="race-subtitle">Complete race results and performance data</p>
            </div>

            <div className="race-wrapper">
                <div className="race-table">
                    <div className="race-head">
                        <span>RD</span>
                        <span>Location</span>
                        <span>Date</span>
                        <span>Finish</span>
                        <span>Best Lap</span>
                    </div>
                    <div id="raceRows">
                        {raceData.map((race, index) => (
                            <div
                                key={index}
                                className={`race-row ${activeIndex === index ? 'active' : ''}`}
                                onMouseEnter={() => handleRowHover(index, race.img)}
                            >
                                <span>{race.round}</span>
                                <span>{race.location}</span>
                                <span>{race.date}</span>
                                <span>{race.finish}</span>
                                <span>{race.lap}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="race-preview">
                    <img
                        src={currentImage}
                        id="raceImage"
                        alt="Race"
                        style={{ opacity: imageOpacity }}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}

export default RaceStats;
