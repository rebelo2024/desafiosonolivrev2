import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Brain, ClipboardList, Milk, Baby } from 'lucide-react';
import Reveal from './Reveal';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.primaryGradient};
  padding: ${({ theme }) => theme.spacing.section} 0;
  position: relative;
  overflow: hidden;

  /* Decorator circles */
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(80px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 250px;
    height: 250px;
    background: rgba(212, 175, 55, 0.15); /* Gold hint */
    border-radius: 50%;
    filter: blur(60px);
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: clamp(2rem, 4vw, 3rem);
  text-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.95);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  font-weight: 300;
  letter-spacing: 0.5px;
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const PillarCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 15px 40px 0 rgba(31, 38, 135, 0.25);

    /* Target the icon circle on hover */
    & > div:first-child {
      transform: scale(1.1);
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.normal};
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);

  svg {
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }
`;

const PillarTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.35rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.2;
`;

const PillarDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
`;

const pillars = [
  {
    icon: Brain,
    title: 'Mecanismos do Sono',
    description: 'Entenda os aspectos neurológicos, biológicos e comportamentais do seu bebê.'
  },
  {
    icon: ClipboardList,
    title: 'Rotinas e Rituais',
    description: 'O passo a passo para criar hábitos saudáveis de sono sem complicações.'
  },
  {
    icon: Milk,
    title: 'Alimentação Adequada',
    description: 'Como a nutrição impacta diretamente na qualidade do sono noturno.'
  },
  {
    icon: Baby,
    title: 'Entendendo o Choro',
    description: 'Aprenda a interpretar e acalmar seu bebê com segurança e acolhimento.'
  }
];

export const WhatIsChallenge = () => {
  return (
    <Section id="challenge">
      <Container>
        <Reveal>
          <Title>Desafio Sono Livre</Title>
          <Subtitle>4 Pilares Para Transformar as Noites da Sua Família</Subtitle>
        </Reveal>

        <PillarsGrid>
          {pillars.map((pillar, index) => (
            <Reveal key={index} delay={0.1 * (index + 1)}>
              <PillarCard
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper>
                  <pillar.icon size={36} strokeWidth={1.5} />
                </IconWrapper>
                <PillarTitle>{pillar.title}</PillarTitle>
                <PillarDescription>{pillar.description}</PillarDescription>
              </PillarCard>
            </Reveal>
          ))}
        </PillarsGrid>
      </Container>
    </Section>
  );
};

export default WhatIsChallenge;
