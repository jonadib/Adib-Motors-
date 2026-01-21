import { useRef } from 'react';

function QuoteSection() {
    const dustCardRef = useRef(null);
    const cleanImgRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!dustCardRef.current || !cleanImgRef.current) return;

        const rect = dustCardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cleanImgRef.current.style.clipPath = `circle(70px at ${x}px ${y}px)`;
    };

    const handleMouseLeave = () => {
        if (!cleanImgRef.current) return;
        cleanImgRef.current.style.clipPath = `circle(0px at 50% 50%)`;
    };

    return (
        <section className="quote-interstitial">
            <img src="/landing/grunge-top.png" className="grunge-top" alt="Grunge Top" />

            <div className="quote-inner">
                <div className="quote-text">
                    <span className="quote-mark">"</span>
                    <h2>
                        EVERY <span className="highlight">RACE</span> IS A<br />
                        BATTLE AGAINST<br />
                        YOURSELF
                    </h2>
                    <p className="quote-author">— Adib, Professional Racer</p>
                </div>

                <div
                    className="dust-reveal-card"
                    id="dustCard"
                    ref={dustCardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src="/landing/dust.jpg" alt="Dusty Helmet" />
                    <img
                        src="/landing/clean1.jpg"
                        className="clean-img"
                        id="cleanImg"
                        ref={cleanImgRef}
                        alt="Clean Helmet"
                    />
                </div>
            </div>
        </section>
    );
}

export default QuoteSection;
