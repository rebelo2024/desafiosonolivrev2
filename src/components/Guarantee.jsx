import styled from 'styled-components';
import Reveal from './Reveal';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
`;

const GuaranteeCard = styled.div`
  background: ${({ theme }) => theme.colors.sectionLavender};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const ShieldIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.success};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};

  svg {
    width: 45px;
    height: 45px;
    fill: white;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.softBlack};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 2rem;

  span {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.mediumGray};
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
`;

const Badge = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  font-size: 0.85rem;
  font-weight: 700;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Guarantee = () => {
  return (
    <Section id="guarantee">
      <Container>
        <Reveal>
          <GuaranteeCard>
            <ShieldIcon>
              <svg viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </ShieldIcon>

            <Title>
              Garantia de <span>7 dias</span>
            </Title>

            <Description>
              Teste por 7 dias e se não gostar, devolvemos 100% do seu dinheiro. Sem letras miúdas.
            </Description>

            <Badge>✓ Risco Zero</Badge>
          </GuaranteeCard>
        </Reveal>
      </Container>
    </Section>
  );
};

export default Guarantee;
