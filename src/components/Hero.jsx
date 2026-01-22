function Hero() {
    return (
        <div className="scroll-container">
            <div className="sticky-wrapper">
                <div className="scrolling-text" id="scrollText"></div>
                <div className="card-container" id="card">
                    <img src="/landing/landing.webp" className="card-image" alt="Hero Background" fetchPriority="high" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
