import styled from 'styled-components';
import Reveal from './Reveal';
import expertPhoto from '../assets/images/mariaximena.png';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
  }
`;

const ExpertImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${({ theme }) => theme.colors.primaryLight};
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

const CredentialBadge = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadows.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    right: calc(50% - 140px + 10px);
  }
`;

const Content = styled.div``;

const Subtitle = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Name = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.softBlack};
  font-size: 2.5rem;
`;

const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Highlights = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: ${({ theme }) => theme.spacing.lg};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-right: none;
    padding-right: 0;
  }

  strong {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1;
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.mediumGray};
    font-weight: 400;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const Expert = () => {
  return (
    <Section id="expert">
      <Container>
        <Reveal>
          <ImageWrapper>
            <ExpertImage src={expertPhoto} alt="Maria Ximena - Especialista em Sono Infantil" />
            <CredentialBadge>✨ Especialista</CredentialBadge>
          </ImageWrapper>
        </Reveal>

        <Reveal delay={0.2}>
          <Content>
            <Subtitle>SUA MENTORA</Subtitle>
            <Name>Conheça Maria Ximena</Name>

            <Bio>
              Especialista em Sono Infantil e Pedagoga com mais de 10 anos de experiência ajudando famílias a recuperarem suas noites de sono.
              <br /><br />
              Desenvolvi o método <strong>Sono Livre</strong> após ver milhares de mães sofrendo com privação de sono desnecessária, acreditando que "é só uma fase" ou que precisam deixar o bebê chorar.
              <br /><br />
              Minha missão é trazer leveza para sua maternidade, respeitando o desenvolvimento do seu filho e o vínculo de amor entre vocês.
            </Bio>

            <Highlights>
              <Highlight>
                <strong>+5k</strong>
                <span>Famílias Atendidas</span>
              </Highlight>
              <Highlight>
                <strong>100%</strong>
                <span>Método Humanizado</span>
              </Highlight>
            </Highlights>
          </Content>
        </Reveal>
      </Container>
    </Section>
  );
};

export default Expert;
