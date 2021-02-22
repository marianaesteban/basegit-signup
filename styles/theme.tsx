const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1280px',
};

const main = {
  fontSizes: {
    default: '14px',
  },
  fontFamilies: {
    default: '"Inter", sans-serif',
  },
  fontWeights: {
    light: 400,
    regular: 500,
    bold: 800,
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    gray: {
      300: '#D1D5DB',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
    },
    error: '#C53030',
    success: '#2F855A',
  },
  shadows: {
    sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  device: breakpoints,
};

export const themes = {
  main,
};
