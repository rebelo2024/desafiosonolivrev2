import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.background}; /* Ensure contrast with previous section */
  padding: ${({ theme }) => theme.spacing.section} 0;
  position: relative;
`;

const Container = styled.div`
  max-width: 900px; /* Constrain width for better readability */
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primaryDark};
    font-style: italic; /* Match Hero style */
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 8px;
      background: rgba(157, 142, 195, 0.2); /* Highlight effect */
      z-index: -1;
    }
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const BenefitCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); /* Clean subtle shadow */
  border-left: 4px solid ${({ theme }) => theme.colors.primary}; /* Left accent */
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-left-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.success};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const BenefitText = styled.span`
  font-size: 1.05rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`;

const benefits = [
  'Bebê dormindo a noite toda naturalmente',
  'Mais qualidade de vida para toda a família',
  'Mãe descansada e com energia',
  'Bebê mais tranquilo e feliz durante o dia',
  'Rotinas previsíveis e organizadas',
  'Menos choro e estresse',
  'Desenvolvimento saudável do bebê',
  'Método gentil e respeitoso'
];

export const Benefits = () => {
  return (
    <Section id="benefits">
      <Container>
        <Reveal>
          <SectionTitle>
            Os <span>Benefícios</span> do Método
          </SectionTitle>
        </Reveal>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={0.05 * index}>
              <BenefitCard
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <IconWrapper>
                  <CheckCircle2 size={28} strokeWidth={2} />
                </IconWrapper>
                <BenefitText>{benefit}</BenefitText>
              </BenefitCard>
            </Reveal>
          ))}
        </BenefitsGrid>
      </Container>
    </Section>
  );
};

export default Benefits;
