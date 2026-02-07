import styled from 'styled-components';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.primaryGradient};
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 2.2rem;
`;

const OfferCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.large};
  position: relative;
  overflow: hidden;
`;

const SpecialBadge = styled.span`
  position: absolute;
  top: 20px;
  right: -35px;
  background: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 50px;
  font-size: 0.75rem;
  font-weight: 700;
  transform: rotate(35deg);
  text-transform: uppercase;
`;

const PriceBreakdown = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.mediumGray};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.lightGray};

  &:last-child {
    border-bottom: none;
  }
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  margin-top: ${({ theme }) => theme.spacing.sm};
  border-top: 2px solid ${({ theme }) => theme.colors.softBlack};
  
  span:first-child {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.softBlack};
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
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const PriceTag = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primaryDark};
  line-height: 1;

  span.currency {
    font-size: 1.5rem;
    vertical-align: super;
  }

  span.cents {
    font-size: 1.5rem;
  }
`;

const Savings = styled.div`
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  display: inline-block;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CTAButton = styled(motion.a)`
  display: block;
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.25rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
  transition: all ${({ theme }) => theme.transitions.normal};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(16, 185, 129, 0.5);
    color: ${({ theme }) => theme.colors.white};
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
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.mediumGray};

  svg {
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.success};
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

            <Savings>💰 Desconto de 87%</Savings>

            <CTAButton
              href={HOTMART_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SIM, QUERO O DESAFIO SONO LIVRE
            </CTAButton>

            <SecurityBadges>
              <Badge>
                <svg viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                Compra Segura
              </Badge>
              <Badge>
                <svg viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
                Hotmart
              </Badge>
              <Badge>
                <svg viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                Garantia 7 dias
              </Badge>
            </SecurityBadges>
          </OfferCard>
        </Reveal>
      </Container>
    </Section>
  );
};

export default FinalOffer;
