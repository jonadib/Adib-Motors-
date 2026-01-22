import { useEffect } from 'react';

function Footer() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const helmet = document.getElementById('helmet3D');
            if (!helmet) return;

            const x = e.clientX;
            const y = e.clientY;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const rotateY = ((x - centerX) / centerX) * 25;
            const rotateX = ((y - centerY) / centerY) * -15;

            helmet.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const brands = ['ALPINESTARS', 'AGV', 'DAINESE', 'SHOEI', 'OAKLEY', 'REDBULL'];

    return (
        <footer className="fight-footer">
            <div className="fight-container">
                <div className="fight-text-layer">
                    <h1 className="fight-heading">
                        FIGHT FOR<br />
                        <span className="text-hollow">EVERY INCH</span>
                    </h1>
                </div>

                <div className="fight-helmet-layer">
                    <div className="helmet-anim-wrapper">
                        <img
                            src="/helmet/helmet-collection1.webp"
                            className="interactive-helmet"
                            id="helmet3D"
                            alt="3D Helmet"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="fight-nav-layer">
                    <div className="nav-col left">
                        <span className="nav-label">Navigate</span>
                        <nav>
                            <a href="#home">Home</a>
                            <a href="#mission">Mission</a>
                            <a href="#gallery">Gallery</a>
                            <a href="#helmets">Helmets</a>
                        </nav>
                    </div>

                    <div className="nav-col right">
                        <span className="nav-label">Connect</span>
                        <nav>
                            <a href="#store">Store</a>
                            <a href="#contact">Contact</a>
                            <a href="#instagram">Instagram</a>
                            <a href="#youtube">Youtube</a>
                        </nav>
                    </div>
                </div>

                <a href="https://mujahidulislamadib.vercel.app/" className="business-btn">Business Inquiries</a>
            </div>

            <div className="brand-ticker-wrapper">
                <div className="brand-track">
                    {[...Array(3)].map((_, setIndex) => (
                        <div key={setIndex} className="ticker-content">
                            {brands.map((brand, idx) => (
                                <span key={`${setIndex}-${idx}`}>{brand}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="legal-footer">
                <span>© 2024 AdibStudio. All Rights Reserved.</span>
                <div className="legal-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                </div>
            </div>


        </footer>
    );
}

export default Footer;
