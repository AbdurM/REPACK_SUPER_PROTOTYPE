// Generated from Fingent Boilerplate

import { ListItemViewModel, ListItemProps, ListItemData } from "./ListItemModel";

export default function useListItemViewModel(props: ListItemProps): ListItemViewModel {
  const { itemData, onPress } = props;

  const displayData: ListItemData = {
    id: itemData?.id || "",
    type: itemData?.type || "",
    date: itemData?.date || "",
    amount: itemData?.amount || "",
    currency: itemData?.currency || "AED",
  };

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return {
    displayData,
    handlePress,
  };
}