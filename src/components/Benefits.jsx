import styled from 'styled-components';
import Reveal from './Reveal';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
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

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.sectionLavender};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    transform: translateX(5px);
  }
`;

const BenefitIcon = styled.span`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.success};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
    fill: white;
  }
`;

const BenefitText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.softBlack};
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
                            <BenefitItem>
                                <BenefitIcon>
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </BenefitIcon>
                                <BenefitText>{benefit}</BenefitText>
                            </BenefitItem>
                        </Reveal>
                    ))}
                </BenefitsGrid>
            </Container>
        </Section>
    );
};

export default Benefits;
