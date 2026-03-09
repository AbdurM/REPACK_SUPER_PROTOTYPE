// generated from template

import { useState } from 'react';
import { AsyncImageViewModel } from './AsyncImageModel';

export default function useAsyncImageViewModel(): AsyncImageViewModel {
  const [loader, setLoader] = useState<boolean>(true);

  function onLoad(): void {
    if (!loader) {
      setLoader(true);
    }
  }

  return { loader, onLoad, setLoader };
}
