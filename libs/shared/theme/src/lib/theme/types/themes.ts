import type {
  PaletteType,
  BorderRadiusType,
  SpacingType,
  ComponentsType,
  TokensType,
  TypographyType,
} from './collections';

export type ThemeType = {
  palette: PaletteType;
  borderRadius: BorderRadiusType;
  spacing: SpacingType;
  components: ComponentsType;
  tokens: TokensType;
  typography: TypographyType;
};
