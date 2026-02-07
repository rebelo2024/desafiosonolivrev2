import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const HOTMART_LINK = "https://pay.hotmart.com/C104216467S";

const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  justify-content: center;
  pointer-events: none; /* Let clicks pass through around the button */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none; /* Mobile only */
  }
`;

const ButtonContainer = styled.a`
  pointer-events: auto;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.shadows.glass};
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OfferText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.mediumGray};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PriceText = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.softBlack};
  line-height: 1.1;

  span {
    color: ${({ theme }) => theme.colors.success};
    font-size: 0.9rem;
    margin-left: 4px;
  }
`;

const ActionButton = styled.div`
  background: ${({ theme }) => theme.colors.success};
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling past 500px (approx after hero text)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <Wrapper
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <ButtonContainer href={HOTMART_LINK} target="_blank" rel="noopener noreferrer">
                        <TextContent>
                            <OfferText>Oferta Limitada</OfferText>
                            <PriceText>R$ 19,90 <span>-87%</span></PriceText>
                        </TextContent>
                        <ActionButton>QUERO AGORA</ActionButton>
                    </ButtonContainer>
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
