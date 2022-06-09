import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { DefaultTheme } from '~/stitches.theme';

export const { styled, config } = createStitches(DefaultTheme);
export type CSS = Stitches.CSS<typeof config>;