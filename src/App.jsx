import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

// Import all sections
import Hero from './components/Hero';
import Problem from './components/Problem';
import Expert from './components/Expert';
import WhatIsChallenge from './components/WhatIsChallenge';
import WhatYouGet from './components/WhatYouGet';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import ForWho from './components/ForWho';
import FAQ from './components/FAQ';
import FinalOffer from './components/FinalOffer';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Hero />
        <Problem />
        <Expert />
        <WhatIsChallenge />
        <WhatYouGet />
        <Benefits />
        <Testimonials />
        <Guarantee />
        <ForWho />
        <FAQ />
        <FinalOffer />
        <Footer />
        <StickyCTA />
      </main>
    </ThemeProvider>
  );
}

export default App;
