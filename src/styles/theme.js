export const theme = {
  colors: {
    // Maternity Boutique Palette
    primary: '#9D8EC3',       // Royal Lilac - Trust & Calm
    primaryLight: '#B5A8D3',  // Softer Lilac
    primaryDark: '#6B4C9A',   // Deep Purple - Authority
    secondary: '#D4AF37',     // Soft Gold - Premium Accent
    background: '#FAFAF8',    // Warm Off-White (Cream/Sand)
    surface: '#FFFFFF',       // Pure White
    text: '#2C3E50',          // Deep Slate - Softer than black
    textLight: '#5D6D7E',     // Muted Slate
    success: '#6B8E23',       // Sage Green - Organic Success
    danger: '#E57373',        // Soft Red
    white: '#FFFFFF',
    lightGray: '#F0F2F5',
    mediumGray: '#9CA3AF',
    darkGray: '#4B5563',
    softBlack: '#2C3E50',     // Alias for text
    primaryGradient: 'linear-gradient(135deg, #9D8EC3 0%, #6B4C9A 100%)',
    goldGradient: 'linear-gradient(135deg, #E8C547 0%, #D4AF37 100%)',
    softGradient: 'linear-gradient(180deg, #FAFAF8 0%, #FFFFFF 100%)',
  },
  fonts: {
    heading: "'Playfair Display', serif", // New Serif Font
    body: "'Lato', sans-serif",           // New Sans Font
  },
  typography: {
    h1: {
      size: 'clamp(2.5rem, 5vw, 4rem)',
      weight: 700,
      lineHeight: 1.1,
    },
    h2: {
      size: 'clamp(2rem, 4vw, 3rem)',
      weight: 600,
      lineHeight: 1.2,
    },
    h3: {
      size: '1.5rem',
      weight: 600,
      lineHeight: 1.3,
    },
    body: {
      size: '1rem',
      lineHeight: 1.6,
    }
  },
  fontSizes: { // Kept for backward compatibility if needed
    h1: 'clamp(2.5rem, 5vw, 4rem)',
    h2: 'clamp(2rem, 4vw, 3rem)',
    h3: '1.5rem',
    body: '1rem',
    small: '0.875rem',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    section: '80px',
  },
  container: {
    maxWidth: '1200px',
    padding: '24px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  borderRadius: {
    small: '8px',
    medium: '16px',
    large: '24px',
    pill: '9999px',
    organic: '30% 70% 70% 30% / 30% 30% 70% 70%', // New organic shape token
  },
  shadows: {
    small: '0 2px 8px rgba(44, 62, 80, 0.05)',
    medium: '0 8px 24px rgba(44, 62, 80, 0.08)',
    large: '0 24px 48px rgba(44, 62, 80, 0.12)',
    button: '0 10px 20px rgba(157, 142, 195, 0.3)',
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
  },
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
};

export default theme;
