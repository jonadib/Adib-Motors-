import { useState } from 'react';
import './Menu.css';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Menu Button */}
            <div className="menu-btn" onClick={toggleMenu}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>

            {/* Full Screen Menu Overlay */}
            <div className={`menu-overlay ${isOpen ? 'menu-open' : ''}`}>
                {/* Close Button */}
                <div className="menu-close" onClick={toggleMenu}>
                    <span>×</span>
                </div>

                {/* Menu Content */}
                <nav className="menu-nav">
                    <a onClick={() => scrollToSection('home')}>HOME</a>
                    <a onClick={() => scrollToSection('mission')}>MISSION</a>
                    <a onClick={() => scrollToSection('gallery')}>GALLERY</a>
                    <a onClick={() => scrollToSection('helmets')}>HELMETS</a>
                    <a onClick={() => scrollToSection('store')}>STORE</a>
                    <a onClick={() => scrollToSection('contact')}>CONTACT</a>
                </nav>

                {/* Social Links */}
                <div className="menu-social">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TIKTOK</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
                </div>
            </div>
        </>
    );
}

export default Menu;
