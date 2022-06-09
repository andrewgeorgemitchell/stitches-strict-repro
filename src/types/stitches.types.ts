export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As = React.ElementType<any> | IntrinsicElementsKeys

export type { VariantProps, ComponentProps } from '@stitches/react'
