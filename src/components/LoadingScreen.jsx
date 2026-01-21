import { useState, useEffect } from 'react';

function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const duration = 2500; // 2.5 seconds for progress
        const interval = 20;
        const step = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + step;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsFading(true);
                        setTimeout(onComplete, 800); // Wait for fade transition
                    }, 500);
                    return 100;
                }
                return next;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <h1 className="loader-logo">adibstudio</h1>
                <div className="loader-progress-wrap">
                    <div
                        className="loader-progress-bar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="loader-subtext">CREATING EXPERIENCES</p>
            </div>
        </div>
    );
}

export default LoadingScreen;
