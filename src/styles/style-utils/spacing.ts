import { css } from '@emotion/react';
import { ITheme } from '../../types/theme';

type TSpacing = string | number;
type TLTRB = { l?: TSpacing; r?: TSpacing; t?: TSpacing; b?: TSpacing };

export const margin = {
  x: (value: TSpacing) => (theme: ITheme) => {
    return css({
      marginLeft: theme.spacing(value),
      marginRight: theme.spacing(value),
    });
  },
  y: (value: TSpacing) => (theme: ITheme) => {
    return css({
      marginTop: theme.spacing(value),
      marginBottom: theme.spacing(value),
    });
  },
  all: (t: TSpacing, l?: TSpacing, b?: TSpacing, r?: TSpacing) => (theme: ITheme) => {
    return css({ margin: theme.spacing(t, l ?? t, b ?? t, r ?? l ?? t) });
  },
  ltrb: (ltrb: TLTRB) => (theme: ITheme) => {
    return css({
      marginTop: theme.spacing(ltrb.t),
      marginBottom: theme.spacing(ltrb.b),
      marginRight: theme.spacing(ltrb.r),
      marginLeft: theme.spacing(ltrb.l),
    });
  },
};

export const padding = {
  x: (value: TSpacing) => (theme: ITheme) => {
    return css({
      paddingLeft: theme.spacing(value),
      paddingRight: theme.spacing(value),
    });
  },
  y: (value: TSpacing) => (theme: ITheme) => {
    return css({
      paddingTop: theme.spacing(value),
      paddingBottom: theme.spacing(value),
    });
  },
  all: (t: TSpacing, l?: TSpacing, b?: TSpacing, r?: TSpacing) => (theme: ITheme) => {
    return css({ padding: theme.spacing(t, l ?? t, b ?? t, r ?? l ?? t) });
  },
  ltrb: (ltrb: TLTRB) => (theme: ITheme) => {
    return css({
      paddingTop: theme.spacing(ltrb.t),
      paddingBottom: theme.spacing(ltrb.b),
      paddingRight: theme.spacing(ltrb.r),
      paddingLeft: theme.spacing(ltrb.l),
    });
  },
};
