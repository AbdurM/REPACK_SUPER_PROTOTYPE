// Generated from Fingent Boilerplate

import { useState, useEffect, useRef } from "react";
import { SelectIconSheetViewModel, SelectIconSheetProps, ListItem } from "./SelectIconSheetModel";

export default function useSelectIconSheetViewModel(props: SelectIconSheetProps): SelectIconSheetViewModel {
  const [tempSelectedItem, setTempSelectedItem] = useState<string>(props.selectedItem || "");
  const bottomSheetRef = useRef<any>(null);

  useEffect(() => {
    // Component initialization
  }, []);

  const handleIconPress = () => {
    if (bottomSheetRef?.current) {
      bottomSheetRef.current.expand();
    }
  };

  const handleBottomSheetButtonPress = () => {
    if (props.onDone && props.useListMode) {
      props.onDone();
    }
    if (props.onBottomSheetButtonPress) {
      props.onBottomSheetButtonPress();
    }
    if (bottomSheetRef?.current) {
      bottomSheetRef.current.collapse();
    }
  };

  const handleItemSelect = (item: ListItem) => {
    setTempSelectedItem(item.id);
    if (props.onItemSelect) {
      props.onItemSelect(item);
    }
  };

  return { 
    handleIconPress,
    handleBottomSheetButtonPress,
    tempSelectedItem,
    handleItemSelect,
    bottomSheetRef,
  };
}