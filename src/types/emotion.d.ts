import '@emotion/react';
import { ITheme } from './theme';

import type {} from '@emotion/react/types/css-prop';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
