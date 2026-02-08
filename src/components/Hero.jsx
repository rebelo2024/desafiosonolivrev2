import styled from 'styled-components';
import { motion } from 'framer-motion';
import bb01 from '../assets/images/bb01.jpg'; // Using the initial image as requested

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  z-index: 1;
  opacity: 0.9;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(250, 250, 248, 0.1) 0%,   /* Barely visible top */
    rgba(250, 250, 248, 0.4) 60%,  /* Much lighter middle */
    rgba(250, 250, 248, 0.9) 100%  /* Solid blend only at very bottom */
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Badge = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(157, 142, 195, 0.2);
  padding: 8px 24px;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: inline-flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.h1.size};
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  
  strong {
    color: ${({ theme }) => theme.colors.primaryDark}; /* Deeper purple for contrast */
    font-weight: 700;
    font-style: italic;
    display: block;
    text-shadow: 0px 1px 0px rgba(255,255,255,0.4); /* Subtle backlight */
  }
`;

const HeroSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
`;

const ScrollIndicator = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const Hero = () => {
  return (
    <HeroSection id="hero">
      <BackgroundImage
        src={bb01}
        alt="Bebê dormindo tranquilamente"
      />

      <Overlay />

      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Badge>
            <span>★</span> Método Aprovado por +1000 Mães
          </Badge>

          <HeroTitle>
            Ensine Seu Bebê a
            <strong>Dormir a Noite Toda</strong>
            em Apenas 7 Dias
          </HeroTitle>

          <HeroSubtitle>
            Transforme o choro em sonhos tranquilos com um método gentil, seguro e comprovado.
          </HeroSubtitle>
        </motion.div>

        <ScrollIndicator
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          onClick={() => {
            const element = document.getElementById('whatyouget');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Role para Descobrir
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 13L12 18L17 13M12 6L12 17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ScrollIndicator>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
