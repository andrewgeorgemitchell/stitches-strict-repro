import type { CSS } from '~/stitches.config'

export enum TextVariantEnum {
  SUBTITLE1 = 'subtitle1',
  SUBTITLE2 = 'subtitle2',
  BODY_BOLD = 'bodyBold',
  BODY = 'body',
  METADATA = 'metadata',
}

export type TextVariantLiteral = `${TextVariantEnum}`

export const TextVariant: Record<TextVariantLiteral, CSS> = {
  subtitle1: {
    textStyles: 'subtitle1',
    textColor: 'subtitle1',
  },
  subtitle2: {
    textStyles: 'subtitle2',
    textColor: 'subtitle2',
  },
  bodyBold: {
    textStyles: 'bodyBold',
    textColor: 'bodyBold',
  },
  body: {
    textStyles: 'body',
    textColor: 'body',
  },
  metadata: {
    textStyles: 'metadata',
    textColor: 'metadata',
  },
}

export const TextTruncateVariant = {
  true: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflowWrap: 'break-word',
    wordBreak: 'break-all',
  },
}

export type TextGutterBottomVariantLiteral = '1' | '2' | '3' | '4'

export const TextGutterBottomVariant: Record<
  TextGutterBottomVariantLiteral,
  CSS
> = {
  1: {
    marginBottom: '$1',
  },
  2: {
    marginBottom: '$2',
  },
  3: {
    marginBottom: '$3',
  },
  4: {
    marginBottom: '$4',
  },
}
