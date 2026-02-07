import styled from 'styled-components';

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.softBlack};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
  text-align: center;
`;

const Logo = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.white};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.mediumGray};
  font-size: 0.9rem;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Divider = styled.span`
  color: ${({ theme }) => theme.colors.mediumGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Disclaimer = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.mediumGray};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.mediumGray};
  margin: 0;
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <Logo>
          Desafio <span>SONO LIVRE</span>
        </Logo>

        <Links>
          <Link href="#">Política de Privacidade</Link>
          <Divider>|</Divider>
          <Link href="#">Termos de Uso</Link>
        </Links>

        <Disclaimer>
          Este produto não substitui orientação médica profissional. Consulte sempre o pediatra do seu bebê para questões de saúde.
        </Disclaimer>

        <Copyright>
          © {currentYear} Desafio Sono Livre. Todos os direitos reservados.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
