import styled from 'styled-components';
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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-top: 4px solid ${({ $isFor, theme }) =>
        $isFor ? theme.colors.success : theme.colors.danger};
`;

const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ $isFor, theme }) =>
        $isFor ? theme.colors.success : theme.colors.danger};
  font-size: 1.2rem;
`;

const ItemList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.softBlack};
  line-height: 1.5;
`;

const Icon = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.75rem;
  font-weight: bold;
  background: ${({ $isFor, theme }) =>
        $isFor ? theme.colors.success : theme.colors.danger};
  color: white;
`;

const forYouItems = [
    'Seu bebê só dorme no colo ou mamando',
    'Você está exausta com noites mal dormidas',
    'Seu bebê acorda várias vezes durante a noite',
    'Você quer estabelecer uma rotina saudável',
    'Busca um método gentil e respeitoso',
    'Quer mais qualidade de vida familiar'
];

const notForYouItems = [
    'Você acha que bebês devem chorar sozinhos',
    'Não está disposta a criar rotinas',
    'Busca soluções milagrosas instantâneas',
    'Não quer investir tempo no desenvolvimento do bebê'
];

export const ForWho = () => {
    return (
        <Section id="forwho">
            <Container>
                <Reveal>
                    <SectionTitle>Para Quem é Este Desafio?</SectionTitle>
                </Reveal>

                <Grid>
                    <Reveal delay={0.1}>
                        <Card $isFor={true}>
                            <CardTitle $isFor={true}>
                                ✨ Este desafio É para você se...
                            </CardTitle>
                            <ItemList>
                                {forYouItems.map((item, index) => (
                                    <Item key={index}>
                                        <Icon $isFor={true}>✓</Icon>
                                        {item}
                                    </Item>
                                ))}
                            </ItemList>
                        </Card>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <Card $isFor={false}>
                            <CardTitle $isFor={false}>
                                ⚠️ Este desafio NÃO é para você se...
                            </CardTitle>
                            <ItemList>
                                {notForYouItems.map((item, index) => (
                                    <Item key={index}>
                                        <Icon $isFor={false}>✕</Icon>
                                        {item}
                                    </Item>
                                ))}
                            </ItemList>
                        </Card>
                    </Reveal>
                </Grid>
            </Container>
        </Section>
    );
};

export default ForWho;
