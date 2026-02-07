// Design System Theme
export const theme = {
  colors: {
    // Primary palette - Lavender/Purple
    primary: '#9B7EBD',
    primaryDark: '#6B4C9A',
    primaryLight: '#E6DEFF',
    primaryGradient: 'linear-gradient(135deg, #9B7EBD 0%, #6B4C9A 100%)',

    // Neutrals
    white: '#FFFFFF',
    lightGray: '#F8F9FA',
    mediumGray: '#6C757D',
    softBlack: '#2D3748',

    // Accents
    success: '#10B981',
    danger: '#EF4444',

    // Backgrounds
    sectionLight: '#FFFFFF',
    sectionAlt: '#F8F9FA',
    sectionLavender: 'rgba(155, 126, 189, 0.08)',
  },

  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },

  fontSizes: {
    h1: 'clamp(2rem, 5vw, 3rem)',
    h2: 'clamp(1.75rem, 4vw, 2.5rem)',
    h3: 'clamp(1.5rem, 3vw, 2rem)',
    body: '1.125rem',
    small: '0.875rem',
  },

  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2.5rem',
    xl: '4rem',
    xxl: '6rem',
    section: 'clamp(3rem, 6vw, 5rem)',
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },

  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.05)',
    medium: '0 8px 30px rgba(0, 0, 0, 0.08)',
    large: '0 20px 50px rgba(0, 0, 0, 0.12)',
    button: '0 10px 25px -5px rgba(155, 126, 189, 0.4)',
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  },

  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    round: '50%',
    pill: '9999px',
  },

  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },

  container: {
    maxWidth: '1200px',
    padding: '0 1.5rem',
  },
};

export default theme;
