import { useEffect, useRef, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Collection from './components/Collection';
import TechSpecs from './components/TechSpecs';
import HallOfFame from './components/HallOfFame';
import QuoteSection from './components/QuoteSection';
import RaceStats from './components/RaceStats';
import MotocrossResults from './components/MotocrossResults';
import SocialFan from './components/SocialFan';
import Footer from './components/Footer';
import Menu from './components/Menu';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (isLoading) return;

      const scrollContainer = document.querySelector('.scroll-container');
      const card = document.getElementById('card');
      const scrollText = document.getElementById('scrollText');
      const collectionGrid = document.getElementById('collectionGrid');
      const body = document.body;

      if (!scrollContainer || !card || !scrollText || !collectionGrid) return;

      const containerTop = scrollContainer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      let progress = -containerTop / (windowHeight * 1.5);
      progress = Math.max(0, Math.min(progress, 1));

      const scale = 1 - (progress * 0.4);
      const borderRadius = progress * 40;
      card.style.transform = `scale(${scale})`;
      card.style.borderRadius = `${borderRadius}px`;

      if (progress > 0.2) {
        scrollText.style.opacity = 1;
        const textProgress = (progress - 0.2) * 1.25;
        scrollText.style.transform = `translateX(${-100 + (textProgress * 100)}%)`;
      } else {
        scrollText.style.opacity = 0;
        scrollText.style.transform = `translateX(-100%)`;
      }

      // Background color shift
      const gridRect = collectionGrid.getBoundingClientRect();
      const startTrigger = 100;
      const fadeDistance = gridRect.height - windowHeight / 2;
      const scrolledPast = startTrigger - gridRect.top;
      let colorProgress = scrolledPast / fadeDistance;
      colorProgress = Math.max(0, Math.min(colorProgress, 1));

      const r = 26 + (229 * colorProgress);
      const g = 28 + (227 * colorProgress);
      const b = 25 + (230 * colorProgress);
      const textVal = 255 - (255 * colorProgress);

      body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      body.style.color = `rgb(${textVal}, ${textVal}, ${textVal})`;

      document.querySelectorAll('.tech-title').forEach(el => {
        if (colorProgress > 0.8) el.style.color = '#000';
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="glass-nav-bg"></div>
      <div className="nav-logo">adibstudio</div>
      <Menu />

      <div id="home">
        <Hero />
      </div>
      <div id="mission">
        <Manifesto />
      </div>
      <div id="gallery">
        <Collection />
      </div>
      <TechSpecs />

      {/* Tire Track Divider */}
      <div style={{ width: '100%', overflow: 'hidden', background: '#111111' }}>
        <img
          src="/landing/t.png"
          alt="Tire Track"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover'
          }}
        />
      </div>

      <div id="helmets">
        <HallOfFame />
      </div>
      <QuoteSection />
      <RaceStats />
      <MotocrossResults />
      <div id="store">
        <SocialFan />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
