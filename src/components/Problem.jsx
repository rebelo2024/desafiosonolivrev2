import styled from 'styled-components';
import Reveal from './Reveal';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.sectionLavender};
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 2rem;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContentBox = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-left: 1.5rem;
  position: relative;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.softBlack};
  line-height: 1.6;

  &::before {
    content: '❌';
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 0.8rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 600;
`;

export const Problem = () => {
  return (
    <Section id="problem">
      <Container>
        <Reveal>
          <Title>
            O que está <span>acontecendo com você?</span>
          </Title>
        </Reveal>

        <Reveal delay={0.2}>
          <ContentBox>
            <List>
              <ListItem>
                O seu bebê acorda várias vezes à noite e só volta a dormir no peito ou no colo?
              </ListItem>
              <ListItem>
                As sonecas durante o dia são curtas, irregulares e muitas vezes só acontecem no seu colo?
              </ListItem>
              <ListItem>
                Você se sente exausta, irritada e sem tempo para cuidar de você, da casa ou do relacionamento?
              </ListItem>
              <ListItem>
                A hora de dormir virou uma batalha, com choro, resistência e muito estresse?
              </ListItem>
            </List>

            <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#4B5563' }}>
              Se você respondeu <Highlight>SIM</Highlight> para alguma dessas perguntas, saiba que <Highlight>não precisa ser assim.</Highlight>
            </div>
          </ContentBox>
        </Reveal>
      </Container>
    </Section>
  );
};

export default Problem;
