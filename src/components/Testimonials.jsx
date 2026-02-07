import styled from 'styled-components';
import Reveal from './Reveal';

// Import proof images
import proof1 from '../assets/images/proof-1.png';
import proof2 from '../assets/images/proof-2.png';
import proof4 from '../assets/images/proof-4.png';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.sectionLavender};
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
  font-size: 2rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

// Use available images - note: proof-3 is missing
const testimonials = [proof1, proof2, proof4];

export const Testimonials = () => {
  return (
    <Section id="testimonials">
      <Container>
        <Reveal>
          <SectionTitle>
            Veja o que acontece com a família de quem <span>aplica o método</span>
          </SectionTitle>
        </Reveal>

        <TestimonialsGrid>
          {testimonials.map((image, index) => (
            <Reveal key={index} delay={0.1 * (index + 1)}>
              <TestimonialCard>
                <TestimonialImage
                  src={image}
                  alt={`Depoimento ${index + 1} - Resultado do Desafio Sono Livre`}
                  loading="lazy"
                />
              </TestimonialCard>
            </Reveal>
          ))}
        </TestimonialsGrid>
      </Container>
    </Section>
  );
};

export default Testimonials;
