function Hero() {
    return (
        <div className="scroll-container">
            <div className="sticky-wrapper">
                <div className="scrolling-text" id="scrollText"></div>
                <div className="card-container" id="card">
                    <img src="/landing/landing.png" className="card-image" alt="Hero Background" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
