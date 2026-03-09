// generated from template

import { useState, useEffect } from 'react';
import { WebViewViewModel,WebViewViewModelProps } from './WebViewModel';

export default function useWebViewViewModel({ title }: WebViewViewModelProps): WebViewViewModel {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // component Initialization 
  }, []);


  return { loading, setLoading};
}
