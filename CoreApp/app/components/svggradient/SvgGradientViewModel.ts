// Generated from Fingent Boilerplate

import { useState } from 'react';
import { SvgGradientViewModel, SvgGradientViewProps } from './SvgGradientModel';

export default function useSvgGradientViewModel(props: SvgGradientViewProps): SvgGradientViewModel {
  const [loading, setLoading] = useState<boolean>(false);

  return { loading, setLoading };
}
