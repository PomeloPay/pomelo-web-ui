export type ButtonVariants = 'text' | 'outline' | 'contained';

export type ColorVariants = 'primary' | 'secondary' | 'tertiary';

export type Sizes = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

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
