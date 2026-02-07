import styled from 'styled-components';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.softBlack};
  font-size: 2.2rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

const MethodCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid rgba(155, 126, 189, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.glass};
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const MethodTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1.4rem;
`;

const MethodList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  padding: 0;
`;

const MethodItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.softBlack};
  line-height: 1.5;
  padding: 12px;
  background: linear-gradient(to right, rgba(139, 92, 246, 0.03), transparent);
  border-radius: 8px;
  border-left: 3px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.08);
    border-left-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(4px);
  }

  &::before {
    content: '✨'; // More premium icon
    font-size: 1.1rem;
  }
`;

const BonusStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const BonusCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 2px solid ${({ theme }) => theme.colors.primaryLight};
  position: relative;
  overflow: hidden;
`;

const BonusBadge = styled.span`
  position: absolute;
  top: 15px;
  right: -30px;
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 40px;
  font-size: 0.75rem;
  font-weight: 700;
  transform: rotate(35deg);
`;

const BonusIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const BonusTitle = styled.h4`
  color: ${({ theme }) => theme.colors.softBlack};
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const BonusDescription = styled.p`
  color: ${({ theme }) => theme.colors.mediumGray};
  font-size: 0.95rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const BonusValue = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  span.old {
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: 0.9rem;
  }
  
  span.free {
    color: ${({ theme }) => theme.colors.success};
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const methodModules = [
  'Módulo 1: O Ambiente de Sono Perfeito',
  'Módulo 2: A Rotina que Funciona',
  'Módulo 3: O Ritual de Sono',
  'Módulo 4: O Método na Prática',
  'Módulo 5: Sonecas Tranquilas',
  'Módulo 6: Regressão de Sono e Saltos'
];

const bonuses = [
  {
    icon: '👶',
    title: 'Guia Rápido: Sinais de Sono do Bebê',
    description: 'Aprenda a identificar os sinais que seu bebê dá quando está com sono e nunca mais perca o momento ideal.',
    value: 'R$ 27,00'
  },
  {
    icon: '🛏️',
    title: 'Checklist: Preparando o Quarto do Bebê',
    description: 'Lista completa de itens essenciais para criar o ambiente perfeito para o sono do seu bebê.',
    value: 'R$ 27,00'
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const WhatYouGet = () => {
  return (
    <Section id="whatyouget">
      <Container>
        <Reveal>
          <SectionTitle>
            O Que Você Vai <span>Receber</span>
          </SectionTitle>
        </Reveal>

        <ContentGrid>
          <Reveal>
            <MethodCard
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MethodTitle>
                Acesso Imediato ao Curso Completo:
              </MethodTitle>
              <MethodList
                as={motion.ul}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {methodModules.map((item, index) => (
                  <MethodItem key={index} variants={itemVariants}>
                    {item}
                  </MethodItem>
                ))}
              </MethodList>
            </MethodCard>
          </Reveal>

          <BonusStack>
            <div style={{ paddingBottom: '1rem', fontWeight: 'bold', color: '#5b21b6' }}>
              + BÔNUS EXCLUSIVOS
            </div>
            {bonuses.map((bonus, index) => (
              <Reveal key={index} delay={0.1 * (index + 1)}>
                <BonusCard
                  whileHover={{ scale: 1.02 }}
                >
                  <BonusBadge>GRÁTIS</BonusBadge>
                  <BonusIcon>{bonus.icon}</BonusIcon>
                  <BonusTitle>{bonus.title}</BonusTitle>
                  <BonusDescription>{bonus.description}</BonusDescription>
                  <BonusValue>
                    <span className="old">De {bonus.value}</span>
                    <span className="free">GRÁTIS HOJE</span>
                  </BonusValue>
                </BonusCard>
              </Reveal>
            ))}
          </BonusStack>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default WhatYouGet;
