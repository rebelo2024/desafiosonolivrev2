import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShieldCheck, Check } from 'lucide-react';
import Reveal from './Reveal';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.section} 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
  position: relative;
  z-index: 1;
`;

const GuaranteeCard = styled(motion.div)`
  background: #fff;
  border: 1px solid rgba(157, 142, 195, 0.3); /* Subtle purple border */
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xxl};
  text-align: center;
  position: relative;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.08);

  /* Gold accent top border */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent); /* Gold gradient */
    border-radius: 0 0 4px 4px;
  }
`;

const IconWrapper = styled.div`
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.successLight}, ${({ theme }) => theme.colors.success});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 10px 20px rgba(76, 175, 80, 0.2);
  color: white;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1px dashed ${({ theme }) => theme.colors.success};
    opacity: 0.5;
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.softBlack};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: clamp(1.8rem, 4vw, 2.5rem);

  span {
    color: ${({ theme }) => theme.colors.primaryDark};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 8px;
      background: rgba(212, 175, 55, 0.2); /* Gold highlight */
      z-index: -1;
    }
  }
`;

const Description = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  font-weight: 300;
`;

const SealBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.success};
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.successLight};
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Guarantee = () => {
  return (
    <Section id="guarantee">
      <Container>
        <Reveal>
          <GuaranteeCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <IconWrapper>
              <ShieldCheck size={48} strokeWidth={2} />
            </IconWrapper>

            <Title>
              Garantia de <span>7 dias</span>
            </Title>

            <Description>
              Teste o método por 7 dias completos. Se você não sentir a diferença no sono do seu bebê, devolvemos 100% do seu investimento. Sem perguntas, sem letras miúdas.
            </Description>

            <SealBadge>
              <Check size={16} strokeWidth={3} />
              Risco Zero • Reembolso Garantido
            </SealBadge>
          </GuaranteeCard>
        </Reveal>
      </Container>
    </Section>
  );
};

export default Guarantee;
