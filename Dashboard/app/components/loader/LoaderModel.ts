// Generated from Fingent Boilerplate | 10 September 2025

type LoaderType = 'global' | 'container';
type LoaderSize = 'small' | 'large' | undefined;

interface LoaderViewModel {
}

interface LoaderViewProps {
  keyValue: string;
  type: LoaderType;
  size: LoaderSize;
}

// Default props
const defaultProps: LoaderViewProps = {
  keyValue: "",
  type: 'global',
  size: 'large',
};

export type { LoaderViewProps, LoaderViewModel };
export { defaultProps };