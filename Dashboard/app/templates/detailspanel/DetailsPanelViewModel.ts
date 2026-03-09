// generated from template

import { useState } from 'react';
import { DetailsPanelViewModel,DetailsPanelViewModelProps } from './DetailsPanelModel';

export default function useDetailsPanelViewModel({ title }: DetailsPanelViewModelProps): DetailsPanelViewModel {
  const [loading, setLoading] = useState<boolean>(true);

  return { loading, setLoading};
}
