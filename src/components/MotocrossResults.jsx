import { useState } from 'react';

function MotocrossResults() {
    const [activeYear, setActiveYear] = useState(2024);

    const toggleYear = (year) => {
        setActiveYear(activeYear === year ? null : year);
    };

    const years = [
        {
            year: 2024,
            races: 5,
            wins: 3,
            podiums: 4,
            results: [
                { round: '01', code: 'BH', location: 'BAHRAIN', flag: '🇧🇭', date: '2 MAR 24', finish: '🏆 1ST', lap: '1:34.476 s' },
                { round: '02', code: 'SA', location: 'SAUDI ARABIA', flag: '🇸🇦', date: '9 MAR 24', finish: '🏆 1ST', lap: '1:31.944 s' },
                { round: '03', code: 'AU', location: 'AUSTRALIA', flag: '🇦🇺', date: '24 MAR 24', finish: '⚑ 3RD', lap: '1:19.915 s' },
                { round: '04', code: 'JP', location: 'JAPAN', flag: '🇯🇵', date: '7 APR 24', finish: '◎ 1ST', lap: '1:35.186 s' },
                { round: '05', code: 'CN', location: 'CHINA', flag: '🇨🇳', date: '21 APR 24', finish: '⚑ 2ND', lap: '1:37.690 s' },
            ]
        },
        {
            year: 2023,
            races: 2,
            wins: 1,
            podiums: 2,
            results: [
                { round: '01', code: 'BH', location: 'BAHRAIN', flag: '🇧🇭', date: '05 MAR 23', finish: '🏆 2ND', lap: '1:32.100 s' },
                { round: '02', code: 'SA', location: 'SAUDI ARABIA', flag: '🇸🇦', date: '12 MAR 23', finish: '🏆 1ST', lap: '1:28.900 s' },
            ]
        },
        {
            year: 2022,
            races: 2,
            wins: 1,
            podiums: 2,
            results: [
                { round: '01', code: 'BH', location: 'BAHRAIN', flag: '🇧🇭', date: '05 MAR 22', finish: '🏆 2ND', lap: '1:32.100 s' },
                { round: '02', code: 'SA', location: 'SAUDI ARABIA', flag: '🇸🇦', date: '12 MAR 22', finish: '🏆 1ST', lap: '1:28.900 s' },
            ]
        },
        {
            year: 2021,
            races: 2,
            wins: 1,
            podiums: 2,
            results: [
                { round: '01', code: 'BH', location: 'BAHRAIN', flag: '🇧🇭', date: '05 MAR 22', finish: '🏆 2ND', lap: '1:32.100 s' },
                { round: '02', code: 'SA', location: 'SAUDI ARABIA', flag: '🇸🇦', date: '12 MAR 22', finish: '🏆 1ST', lap: '1:28.900 s' },
            ]
        }
    ];

    return (
        <section className="mx-results-section rubik-storm-regular">
            <div className="mx-container">
                <div className="mx-header-row">
                    <div>
                        <h2 className="mx-main-title">MOTOCROSS</h2>
                        <h3 className="mx-sub-title">ALL RESULTS</h3>
                    </div>
                    <p className="mx-description">
                        Complete historical race data<br />
                        from every season
                    </p>
                </div>

                {years.map((yearData) => (
                    <div
                        key={yearData.year}
                        className={`mx-year-item ${activeYear === yearData.year ? 'active' : ''}`}
                    >
                        <div className="mx-year-header" onClick={() => toggleYear(yearData.year)}>
                            <div className="mx-year-left">
                                <span className="mx-arrow">›</span>
                                <span className="mx-year-num">{yearData.year}</span>
                            </div>
                            <div className="mx-year-stats">
                                <div className="stat-box">
                                    <span className="stat-label">RACES</span>
                                    <span className="stat-value">{yearData.races}</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">WINS</span>
                                    <span className="stat-value">{yearData.wins}</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-label">PODIUMS</span>
                                    <span className="stat-value">{yearData.podiums}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mx-year-content">
                            <div className="mx-cards-grid">
                                {yearData.results.map((result, idx) => (
                                    <div key={idx} className="mx-result-card">
                                        <span className="mx-round-num">{result.round}</span>
                                        <div className="mx-country-info">
                                            <span className="mx-country-code">{result.code}</span>
                                            <span className="mx-country-name">{result.location}</span>
                                            <span className="mx-country-flag">{result.flag}</span>
                                        </div>
                                        <div className="mx-date">{result.date}</div>
                                        <div className="mx-finish-pos">{result.finish}</div>
                                        <div className="mx-lap-time">{result.lap}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MotocrossResults;
