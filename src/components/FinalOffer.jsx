import styled from 'styled-components';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.background} 0%, #F5F3FF 100%); /* Soft Lilac fade */
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 2.5rem;
`;

const OfferCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.large};
  position: relative;
  overflow: visible;
  border: 1px solid rgba(157, 142, 195, 0.1);
  
  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const SpecialBadge = styled.span`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.goldGradient};
  color: #fff;
  padding: 8px 32px;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  white-space: nowrap;
  z-index: 10;
`;

const PriceBreakdown = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 12px;
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textLight};
  border-bottom: 1px dashed rgba(0,0,0,0.05);

  &:last-child {
    border-bottom: none;
  }
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 4px;
  margin-top: 8px;
  border-top: 1px solid rgba(0,0,0,0.05);
  
  span:first-child {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  span:last-child {
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.mediumGray};
  }
`;

const FinalPrice = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const PayLabel = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
`;

const PriceTag = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark}; // Deep Purple
  line-height: 1;
  letter-spacing: -2px;

  span.currency {
    font-size: 1.5rem;
    vertical-align: super;
    margin-right: 4px;
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  span.cents {
    font-size: 1.5rem;
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Savings = styled.div`
  background: rgba(107, 142, 35, 0.1); // Sage Green weak
  color: ${({ theme }) => theme.colors.success};
  padding: 6px 16px;
  border-radius: 50px;
  display: inline-block;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CTAButton = styled(motion.a)`
  display: block;
  background: ${({ theme }) => theme.colors.success}; // Sage Green
  color: white;
  padding: 1.25rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(107, 142, 35, 0.25);
  transition: all ${({ theme }) => theme.transitions.normal};
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(107, 142, 35, 0.35);
    background: #55761a; // Darker Sage
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 1.1rem 1.5rem;
  }
`;

const SecurityBadges = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.mediumGray};

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.colors.mediumGray};
  }
`;

const HOTMART_LINK = "https://pay.hotmart.com/C104216467S";

export const FinalOffer = () => {
  return (
    <Section id="offer">
      <Container>
        <Reveal>
          <Title>Chega de Noites em Claro!</Title>
        </Reveal>

        <Reveal delay={0.2}>
          <OfferCard>
            <SpecialBadge>Oferta Especial</SpecialBadge>

            <PriceBreakdown>
              <PriceItem>
                <span>Método Completo</span>
                <span>R$ 97,00</span>
              </PriceItem>
              <PriceItem>
                <span>Bônus: Guia Sinais de Sono</span>
                <span>R$ 27,00</span>
              </PriceItem>
              <PriceItem>
                <span>Bônus: Checklist do Quarto</span>
                <span>R$ 27,00</span>
              </PriceItem>
              <TotalRow>
                <span>Valor Total:</span>
                <span>R$ 151,00</span>
              </TotalRow>
            </PriceBreakdown>

            <FinalPrice>
              <PayLabel>Hoje por apenas:</PayLabel>
              <PriceTag>
                <span className="currency">R$</span>
                19<span className="cents">,90</span>
              </PriceTag>
            </FinalPrice>

            <Savings>💰 Economize R$ 131,00</Savings>

            <CTAButton
              href={HOTMART_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SIM, PRECISO DORMIR DE NOVO
            </CTAButton>

            <SecurityBadges>
              <Badge>
                <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>
                Compra Segura
              </Badge>
              <Badge>
                <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                Garantia 7 Dias
              </Badge>
            </SecurityBadges>
          </OfferCard>
        </Reveal>
      </Container>
    </Section>
  );
};

export default FinalOffer;
