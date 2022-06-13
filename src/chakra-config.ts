import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    stone: `'Nova Cut', sans-serif`,
    normal: `'Hind Siliguri', sans-serif`,
    news: `'Noto Serif JP', sans-serif`,
  },
  colors: {
    green: '#70863d',
    dark: '#212a2f',
    beige: '#f8f7f5',
  },
});

export default theme;
