// generated from template

import { useState } from "react";
import { AsyncImageViewModel, AsyncImageViewProps } from "./AsyncImageModel";

export default function useAsyncImageViewModel(props: AsyncImageViewProps): AsyncImageViewModel {
  const [loaded, setLoader] = useState<boolean>(true);

  function onLoad(): void {
    if (!loaded) {
      setLoader(true);
    }
  }

  return { loaded, onLoad, setLoader };
}
