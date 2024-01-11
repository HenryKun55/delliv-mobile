import { extendTheme } from 'native-base';

export const theme = extendTheme({
  fontConfig: {
    400: { normal: 'Raleway_400Regular' },
    500: { normal: 'Raleway_500Medium' },
    600: { normal: 'Raleway_700Bold' },
  },
  fonts: {
    heading: 'Raleway',
    body: 'Raleway',
    mono: 'Raleway',
  },
  colors: {
    unset: undefined,
  },
});
