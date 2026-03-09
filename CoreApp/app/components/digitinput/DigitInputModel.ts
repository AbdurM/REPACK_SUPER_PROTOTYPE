// Generated from Fingent Boilerplate | 2025-09-09 | diya.juliet

import { variantTypes } from 'components/customtext/CustomTextModel';
import { Theme } from 'utilities/TenantIndex';

interface DigitInputViewModel extends DigitInputProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  values: string[];
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
  handleChange: (text: string, index: number) => void;
  handleKeyPress: (e: any, index: number) => void;
  handleFocus: (index: number) => void;
  handleInputClick: () => void; // Click handler for focusing first input
  inputsRef: any;
  focusedIndex: number;
}

interface DigitInputProps {
  keyValue?: string;
  digits?: number; // total number of digit boxes
  focusStyle?: 'border' | 'cursor'; // focus type
  onComplete?: (code: string) => void;
  variant?: variantTypes;
  textColor?: string;
}

// Default props
const defaultProps: DigitInputProps = {
  keyValue: '',
  digits: 4,
  focusStyle: 'border',
  variant: 'default',
  textColor: Theme.Colors.neutral8,
};

export type { DigitInputProps, DigitInputViewModel };
export { defaultProps };
