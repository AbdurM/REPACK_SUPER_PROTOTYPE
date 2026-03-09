// Generated from Fingent Boilerplate

import { useState } from 'react';
import { BottomSheetHeaderViewModel } from './BottomSheetHeaderModel';

export default function useBottomSheetHeaderViewModel(): BottomSheetHeaderViewModel {
  const [loading, setLoading] = useState<boolean>(false);

  return { loading, setLoading };
}