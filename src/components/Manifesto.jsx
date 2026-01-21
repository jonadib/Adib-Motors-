import { useEffect, useState, useRef } from 'react';

function Manifesto() {
    const text = "A racer driven by speed, discipline, and a lifelong dream. From chasing lap records to competing on national and international stages, this is the journey of a biker pushing limits, winning moments, and building a name on the track—one race at a time.";
    const [displayedText, setDisplayedText] = useState("");
    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (hasStarted && displayedText.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, 30); // Typing speed
            return () => clearTimeout(timeout);
        }
    }, [hasStarted, displayedText, text]);

    return (
        <section className="manifesto-section" ref={sectionRef}>
            <svg className="helmet-icon" viewBox="0 0 24 24">
                <path d="M12 2a9 9 0 0 1 9 9v7a2 2 0 0 1-2 2h-4v-4h4v-5a7 7 0 0 0-14 0v5h4v4H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 9-9z" />
            </svg>
            <h2 className="manifesto-text">
                {displayedText}
                <span className="cursor">|</span>
            </h2>
        </section>
    );
}

export default Manifesto;
