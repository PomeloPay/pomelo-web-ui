export type ButtonVariants = 'text' | 'outline' | 'contained';

export type ColorVariants = 'primary' | 'secondary' | 'tertiary' | 'error' | 'success';

export type Sizes = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export interface IInputNumberOptions {
  numeral?: boolean;
  prefix?: string;
  numeralThousandsGroupStyle?: 'thousand' | 'lakh' | 'none' | 'wan';
  numeralDecimalScale?: number;
  noImmediatePrefix?: boolean;
  rawValueTrimPrefix?: boolean;
  onValueChanged?: () => {}
  [key: string]: any
}
