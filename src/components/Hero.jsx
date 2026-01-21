import { useRef } from 'react';

function Hero() {
    const cardRef = useRef(null);
    const revealImgRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current || !revealImgRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        revealImgRef.current.style.clipPath = `circle(150px at ${x}px ${y}px)`;
    };

    const handleMouseLeave = () => {
        if (!revealImgRef.current) return;
        revealImgRef.current.style.clipPath = `circle(0px at 50% 50%)`;
    };

    const handleTouchMove = (e) => {
        if (!cardRef.current || !revealImgRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        revealImgRef.current.style.clipPath = `circle(150px at ${x}px ${y}px)`;
    };

    return (
        <div className="scroll-container">
            <div className="sticky-wrapper">
                <div className="scrolling-text" id="scrollText">Redefining LIMITS Redefining LIMITS Redefining LIMITS</div>
                <div
                    className="card-container"
                    id="card"
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onTouchMove={handleTouchMove}
                >
                    <img src="/landing/2.png" className="card-image img-normal" alt="Normal" />
                    <img
                        src="/landing/3.png"
                        className="card-image img-reveal"
                        id="revealImage"
                        ref={revealImgRef}
                        alt="Racing"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
