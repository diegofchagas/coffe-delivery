import 'styled-components';
import { defaultTheme } from "../styles/themes/defatult";

type ThemeType = typeof defaultTheme;

declare module 'styled-components'{
  export interface DefaultTheme extends ThemeType {}
}

// Esse arquivo auxiliar na chamada das propriedades do theme nos componentes.