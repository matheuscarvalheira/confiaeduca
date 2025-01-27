import 'styled-components';

export const theme = {
  black: '#000000',
  greenScreamin: '#86FF73',
  indigoLavander: '#9747FF',
  begonia: '#FF7373',
  cultured: '#F9F5F2',
  white: '#ffffff'
}

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}