import styled from 'styled-components';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.typography.h2.size};
  color: ${({ theme }) => theme.colors.text}; // Deep Navy
  margin-bottom: ${({ theme }) => theme.spacing.md};

  strong {
    color: ${({ theme }) => theme.colors.primary}; // Royal Lilac
    font-weight: 700;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight}; // Muted Slate
  max-width: 700px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large}; // 24px
  box-shadow: ${({ theme }) => theme.shadows.small}; // Soft shadow
  transition: all ${({ theme }) => theme.transitions.normal};
  border: 1px solid rgba(0,0,0,0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ModuleNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 5rem; /* Much larger */
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryLight}; /* Softer lilac */
  opacity: 0.3;
  line-height: 0.6;
  margin-bottom: 10px;
  letter-spacing: -2px;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  z-index: 2;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const modules = [
  {
    number: "01",
    title: "Entendendo o Sono",
    description: "Descubra como funciona a fisiologia do sono do bebê e por que ele acorda tanto."
  },
  {
    number: "02",
    title: "O Ambiente Perfeito",
    description: "Prepare o quarto e a rotina para induzir o sono profundo naturalmente."
  },
  {
    number: "03",
    title: "Associações de Sono",
    description: "Como retirar gentilmente o hábito de nanar no peito ou colo sem traumas."
  },
  {
    number: "04",
    title: "Sonecas Restauradoras",
    description: "Acerte o ritmo do dia para garantir noites tranquilas e sem brigas."
  },
  {
    number: "05",
    title: "O Desmame Noturno",
    description: "Estratégias para reduzir as mamadas da madrugada com amor e conexão."
  },
  {
    number: "06",
    title: "Saltos e Regressões",
    description: "Saiba lidar com as fases difíceis sem perder todo o progresso conquistado."
  }
];

export const WhatYouGet = () => {
  return (
    <Section id="whatyouget">
      <Container>
        <Reveal>
          <SectionHeader>
            <Title>O Que Você Vai <strong>Receber</strong></Title>
            <Subtitle>
              Um passo a passo completo, do zero ao sono noturno, respeitando o tempo do seu bebê.
            </Subtitle>
          </SectionHeader>
        </Reveal>

        <Grid>
          {modules.map((module, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Card whileHover={{ scale: 1.02 }}>
                <ModuleNumber>{module.number}</ModuleNumber>
                <CardTitle>{module.title}</CardTitle>
                <CardText>{module.description}</CardText>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhatYouGet;
