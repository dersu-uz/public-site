import { ITheme } from "@/types/theme";
import { css } from "@emotion/react";

export const bg = (color: keyof ITheme['palette']['background']) => (theme: ITheme) =>
  css`
    background-color: ${theme.palette.background[color]};
  `;
