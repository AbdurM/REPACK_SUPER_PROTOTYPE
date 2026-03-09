// generated from template

import { useState } from 'react';
import { ContentLoaderViewModel } from './ContentLoaderModel';

export default function useContentLoaderViewModel(): ContentLoaderViewModel {
  const [loading, setLoading] = useState<boolean>(true);

  return { loading, setLoading};
}
