import styled from 'styled-components';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.primaryGradient};
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PillarCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-5px);
  }
`;

const PillarIcon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const PillarTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const PillarDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
`;

const pillars = [
    {
        icon: '🧠',
        title: 'Mecanismos do Sono',
        description: 'Neurológico, Biológico e Comportamental'
    },
    {
        icon: '📋',
        title: 'Rotinas e Rituais',
        description: 'Criação de hábitos saudáveis de sono'
    },
    {
        icon: '🍼',
        title: 'Alimentação Adequada',
        description: 'Orientação nutricional para melhor sono'
    },
    {
        icon: '👶',
        title: 'Entendendo o Choro',
        description: 'Como interpretar e acalmar seu bebê'
    }
];

export const WhatIsChallenge = () => {
    return (
        <Section id="challenge">
            <Container>
                <Reveal>
                    <Title>Desafio Sono Livre</Title>
                    <Subtitle>7 Dias Para Transformar o Sono do Seu Bebê</Subtitle>
                </Reveal>

                <PillarsGrid>
                    {pillars.map((pillar, index) => (
                        <Reveal key={index} delay={0.1 * (index + 1)}>
                            <PillarCard
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <PillarIcon>{pillar.icon}</PillarIcon>
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
