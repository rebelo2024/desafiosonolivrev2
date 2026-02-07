import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.softBlack};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  border: 1px solid transparent;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: transparent;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.softBlack};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const IconWrapper = styled(motion.span)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.mediumGray};
  line-height: 1.7;
  font-size: 0.95rem;
`;

const faqData = [
    {
        question: 'Com que idade posso começar o método?',
        answer: 'Desde o nascimento! O método ensina prevenção e também como corrigir hábitos já estabelecidos.'
    },
    {
        question: 'Preciso deixar meu bebê chorar?',
        answer: 'Não! O método é gentil e respeita o bebê. Você aprenderá a acalmar e confortar da forma correta.'
    },
    {
        question: 'Funciona com bebês amamentados no peito?',
        answer: 'Sim! O método funciona tanto para bebês amamentados quanto para os que tomam fórmula.'
    },
    {
        question: 'E se meu bebê já tem 1 ano ou mais?',
        answer: 'O método funciona em todas as idades, com adaptações apropriadas.'
    },
    {
        question: 'Posso usar chupeta/colo?',
        answer: 'Você aprenderá quando e como usar, sem criar dependências prejudiciais.'
    },
    {
        question: 'Quanto tempo leva para ver resultados?',
        answer: 'Muitos pais relatam melhorias já nos primeiros dias. O desafio completo é de 7 dias.'
    },
    {
        question: 'Recebo suporte?',
        answer: 'Você terá acesso ao método completo para consultar sempre que precisar.'
    },
    {
        question: 'Como recebo o material?',
        answer: 'Imediatamente após a compra, direto no seu email.'
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="faq">
            <Container>
                <Reveal>
                    <SectionTitle>
                        Perguntas <span>Frequentes</span>
                    </SectionTitle>
                </Reveal>

                <FAQList>
                    {faqData.map((item, index) => (
                        <Reveal key={index} delay={0.05 * index}>
                            <FAQItem>
                                <FAQQuestion onClick={() => toggleFAQ(index)}>
                                    {item.question}
                                    <IconWrapper
                                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        +
                                    </IconWrapper>
                                </FAQQuestion>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <FAQAnswer
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {item.answer}
                                        </FAQAnswer>
                                    )}
                                </AnimatePresence>
                            </FAQItem>
                        </Reveal>
                    ))}
                </FAQList>
            </Container>
        </Section>
    );
};

export default FAQ;
