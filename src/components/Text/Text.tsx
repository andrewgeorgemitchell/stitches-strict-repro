import { type CSS, styled } from '~/stitches.config'
import { IntrinsicElementsKeys, type As } from '~/types'

import {
  TextGutterBottomVariant,
  TextGutterBottomVariantLiteral,
  TextTruncateVariant,
  TextVariant,
  TextVariantLiteral,
} from './Text.variants'

const StyledBase = styled('p', {
  variants: {
    variant: TextVariant,
    gutterBottom: TextGutterBottomVariant,
    truncate: TextTruncateVariant,
  },
  defaultVariants: {
    variant: 'body',
    truncate: false,
  },
})

const TextTypeToElementMap: Record<TextVariantLiteral, IntrinsicElementsKeys> =
  {
    bodyBold: 'p',
    body: 'p',
    subtitle1: 'p',
    subtitle2: 'p',
    metadata: 'span',
  }

export interface TextProps {
  variant?: TextVariantLiteral // Remove variant props purposely for simplicity
  gutterBottom?: TextGutterBottomVariantLiteral
  truncate?: boolean
  as?: As
  css?: CSS
  children: React.ReactNode
}

/**
 * Text is a wrapper component for all typography elements
 * use `type` prop to specify the type of text to display.
 *
 * ***
 *
 * Example:
 * ```jsx
 * <Text type="body">
 *   Body text
 * </Text>
 * ```
 *
 * ***
 *
 * @param {TextProps} TextProps
 * @returns {JSX.Element} JSX Element
 */
export const Text = ({
  variant = 'body',
  gutterBottom,
  truncate,
  as = TextTypeToElementMap[variant],
  css,
  children,
  ...props
}: TextProps) => (
  <StyledBase
    variant={variant}
    css={css} // This line seems to be what causes the slow down when not running in strict mode
    // css={css as any} // This will fix slowdown
    gutterBottom={gutterBottom}
    truncate={truncate}
    as={as}
    {...props}
  >
    {children}
  </StyledBase>
)
