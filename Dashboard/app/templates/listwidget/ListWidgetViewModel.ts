// Generated from Fingent Boilerplate

import React from "react";
import { ListWidgetViewModel, ListWidgetProps } from "./ListWidgetModel";

export default function useListWidgetViewModel(_props: ListWidgetProps): ListWidgetViewModel {
  const bottomSheetRef = React.useRef<any>(null);

  return {
    bottomSheetRef,
  };
}