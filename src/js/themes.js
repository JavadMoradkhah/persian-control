export const themes = {
  light: {
    faName: 'روشن',
    mode: 'light',
    colors: {
      primary: '#2563eb',
      'primary-content': '#FFFFFF',
      secondary: '#d946ef',
      'secondary-content': '#FFFFFF',
      accent: '#3b82f6',
      neutral: '#1D232A',
      'base-100': '#ffffff',
      'base-200': '#f2f2f2',
      'base-300': '#e6e6e6',
      info: '#38bdf8',
      success: '#22c55e',
      warning: '#fbbf24',
      error: '#e11d48',
    },
  },
  dark: {
    faName: 'تیره',
    mode: 'dark',
    colors: {
      primary: '#4338ca',
      secondary: '#d946ef',
      'secondary-content': '#FFFFFF',
      accent: '#3b82f6',
      neutral: '#2b3138',
      'neutral-content': '#d8dfe7',
      'base-100': '#1D232A',
      'base-200': '#1c2128',
      'base-300': '#15191f',
      info: '#38bdf8',
      success: '#22c55e',
      warning: '#fbbf24',
      error: '#e11d48',
    },
  },
  winter: {
    faName: 'زمستان',
    mode: 'light',
    colors: {
      primary: '#047AFF',
      'primary-content': '#FFFFFF',
      secondary: '#463AA2',
      accent: '#C148AC',
      neutral: '#021431',
      'base-100': '#ffffff',
      'base-200': '#F2F7FF',
      'base-300': '#E3E9F4',
      'base-content': '#394E6A',
      info: '#4dc4e2',
      success: '#0ce289',
      warning: '#e4973e',
      error: '#d14242',
    },
  },
  night: {
    faName: 'شب',
    mode: 'dark',
    colors: {
      primary: '#38bdf8',
      secondary: '#818CF8',
      accent: '#F471B5',
      neutral: '#1E293B',
      'neutral-focus': '#273449',
      'base-100': '#0F172A',
      'base-200': '#0e1527',
      'base-300': '#0c1222',
      info: '#0CA5E9',
      'info-content': '#000000',
      success: '#2DD4BF',
      warning: '#F4BF50',
      error: '#FB7085',
    },
  },
  sunset: {
    faName: 'غروب',
    mode: 'dark',
    colors: {
      primary: '#FF865B',
      'primary-content': '#FFFFFF',
      secondary: '#FD6F9C',
      accent: '#B387FA',
      neutral: 'oklch(26% 0.019 237.69)',
      'neutral-content': 'oklch(70% 0.019 237.69)',
      'base-100': 'oklch(22% 0.019 237.69)',
      'base-200': 'oklch(20% 0.019 237.69)',
      'base-300': 'oklch(18% 0.019 237.69)',
      'base-content': '#9fb9d0',
      info: '#89e0eb',
      success: '#addfad',
      warning: '#f1c891',
      error: '#ffbbbd',
      '--rounded-box': '1.2rem',
      '--rounded-btn': '0.8rem',
      '--rounded-badge': '0.4rem',
      '--tab-radius': '0.7rem',
    },
  },
  synthwave: {
    faName: 'سینتویو',
    mode: 'dark',
    colors: {
      primary: '#e779c1',
      'primary-content': '#fff',
      secondary: '#58c7f3',
      accent: '#f3cc30',
      neutral: '#221551',
      'base-100': '#1a103d',
      info: '#53c0f3',
      success: '#71ead2',
      warning: '#f3cc30',
      error: '#e24056',
    },
  },
  forest: {
    faName: 'جنگل',
    mode: 'dark',
    colors: {
      primary: '#1eb854',
      'primary-content': '#fff',
      secondary: '#1DB88E',
      accent: '#1DB8AB',
      neutral: '#19362D',
      'base-100': '#0e0e11',
      'base-200': '#0c0c0f',
      'base-300': '#111115',
      '--rounded-btn': '1.9rem',
    },
  },
  dracula: {
    faName: 'دراکولا',
    mode: 'dark',
    colors: {
      primary: '#ff79c6',
      secondary: '#bd93f9',
      accent: '#ffb86c',
      neutral: '#414558',
      'base-100': '#282a36',
      'base-content': '#f8f8f2',
      info: '#8be9fd',
      success: '#50fa7b',
      warning: '#f1fa8c',
      error: '#ff5555',
    },
  },
  corporate: {
    faName: 'شرکتی',
    mode: 'light',
    colors: {
      primary: '#4b6bfb',
      secondary: '#d351e4',
      accent: '#67cba0',
      neutral: '#373947',
      'neutral-content': '#ccd1da',
      'base-100': '#ffffff',
      'base-content': '#525461',
      '--rounded-box': '0.25rem',
      '--rounded-btn': '.125rem',
      '--rounded-badge': '.125rem',
      '--animation-btn': '0',
      '--animation-input': '0',
      '--btn-focus-scale': '1',
    },
  },
};

export const themeNames = Object.entries(themes).map(([themeName, { faName }]) => ({
  enName: themeName,
  faName: faName,
}));

export const tailwindThemes = Object.entries(themes).map(([themeName, { colors }]) => ({
  [themeName]: colors,
}));
