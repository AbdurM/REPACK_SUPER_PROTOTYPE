// Generated from Fingent Boilerplate

import { useState } from "react";
import { EditButtonViewModel, EditButtonProps } from "./EditButtonModel";

export default function useEditButtonViewModel(props: EditButtonProps): EditButtonViewModel {
  const [loading, setLoading] = useState<boolean>(false);

  return { 
    loading, 
    setLoading
  };
}
