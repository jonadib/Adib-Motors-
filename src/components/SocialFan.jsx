function SocialFan() {
    const cards = [
        '/collection/first.png',
        '/collection/second.png',
        '/collection/third.png',
        '/collection/fifteen.png',
        '/collection/nine.png',
        '/collection/ten.png',
        '/collection/seven.png',
    ];

    return (
        <section className="social-fan-section">
            <div className="social-fan-header">
                <div className="header-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <h2 className="fan-title-bold">WHAT'S UP</h2>
                <h3 className="fan-title-serif">ON SOCIALS</h3>
            </div>

            <div className="fan-cards-container">
                {cards.map((card, index) => (
                    <div key={index} className={`fan-card card-${index + 1}`}>
                        <img src={card} alt={`Card ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="social-fan-footer">
                <p>Connect with us on social media</p>
                <div className="fan-links">
                    <a href="#instagram">INSTAGRAM</a>
                    <a href="#tiktok">TIKTOK</a>
                    <a href="#youtube">YOUTUBE</a>
                </div>
            </div>
        </section>
    );
}

export default SocialFan;
