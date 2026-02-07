import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Import all 8 baby images (transition sequence)
import bb01 from '../assets/images/bb01.gif';
import bb02 from '../assets/images/bb02.gif';
import bb03 from '../assets/images/bb03.gif';
import bb04 from '../assets/images/bb04.gif';
import bb05 from '../assets/images/bb05.png';
import bb06 from '../assets/images/bb06.png';
import bb07 from '../assets/images/bb07.png';
import bb08 from '../assets/images/bb08.png';

const babyImages = [bb01, bb02, bb03, bb04, bb05, bb06, bb07, bb08];

const HeroSection = styled.section`
  height: 300vh; /* Scroll space for the animation */
  position: relative;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  opacity: 0;
  transition: opacity 0.2s ease-out;
  will-change: opacity;
  
  &.active {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(
    135deg,
    rgba(155, 126, 189, 0.45) 0%,
    rgba(107, 76, 154, 0.35) 50%,
    rgba(155, 126, 189, 0.45) 100%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 40px 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Badge = styled.div`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 32px;
  font-family: 'Inter', sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.95);
  
  span {
    color: #E8C547;
    font-size: 16px;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 24px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #FFFFFF;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.25rem; /* ~36px */
    padding: 0 1rem;
  }
`;

const TitleHighlight = styled.span`
  color: #E8C547;
  display: block;
  font-style: italic;
  font-weight: 900;
`;

const HeroSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  max-width: 600px;
  margin-bottom: 40px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1.5rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  padding: 18px 48px;
  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
  transition: all 0.3s ease;
  cursor: pointer;
  margin-bottom: 48px;
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(16, 185, 129, 0.5);
    color: white;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px 32px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 18px;
    height: 18px;
    animation: bounce 2s infinite;
    stroke: rgba(255, 255, 255, 0.6);
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-8px); }
    60% { transform: translateY(-4px); }
  }
`;

const HOTMART_LINK = "https://pay.hotmart.com/C104216467S";

export const Hero = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Preload all images on mount
  useEffect(() => {
    babyImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Simple scroll-based image switching
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how much we've scrolled through the section
      // When rect.top is 0, we're at the start
      // When rect.top is -(sectionHeight - viewportHeight), we've scrolled through
      const scrolled = -rect.top;
      const maxScroll = sectionHeight - viewportHeight;

      // Calculate progress (0 to 1)
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));

      // Map progress to image index (0 to 7)
      const newIndex = Math.min(7, Math.floor(progress * 8));

      setActiveIndex(newIndex);
    };

    // Initial call
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeroSection ref={sectionRef} id="hero">
      <StickyContainer>
        <ImagesContainer>
          {babyImages.map((src, index) => (
            <BackgroundImage
              key={index}
              src={src}
              alt={index === 0 ? "Bebê acordado e agitado" :
                index === 7 ? "Bebê dormindo tranquilamente" :
                  `Bebê na transição para dormir, imagem ${index + 1}`}
              className={activeIndex === index ? 'active' : ''}
            />
          ))}
        </ImagesContainer>

        <Overlay />

        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge>
              <span>★</span> Método Comprovado por +1000 Mães
            </Badge>

            <HeroTitle>
              Ensine Seu Bebê a
              <TitleHighlight>Dormir a Noite Toda</TitleHighlight>
              em Apenas 7 Dias
            </HeroTitle>

            <HeroSubtitle>
              Transforme o choro em sonhos tranquilos sem deixar seu bebê<br />
              chorando sozinho no berço.
            </HeroSubtitle>

            <CTAButton
              href={HOTMART_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              QUERO TRANSFORMAR AS NOITES DO MEU BEBÊ →
            </CTAButton>
          </motion.div>

          <ScrollIndicator
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Role para descobrir como
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </ScrollIndicator>
        </HeroContent>
      </StickyContainer>
    </HeroSection>
  );
};

export default Hero;
