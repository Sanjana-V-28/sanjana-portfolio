import themes from './themes';

export const createAppTheme = (mode: 'light' | 'dark') => {
  return mode === 'dark' ? themes.darkTheme : themes.lightTheme;
};

export default createAppTheme('light');
