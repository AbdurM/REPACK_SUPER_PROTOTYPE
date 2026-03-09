// generated from template

import React, { useCallback } from "react";
import { FlashList } from "@shopify/flash-list";
import { FlashListViewProps } from "./FlashListModel";
import useFlashListViewModel from "./FlashListViewModel";

export function FlashListView({
  data,
  props,
  listKey,
  keyExtractor,
  renderComponent,
}: FlashListViewProps): React.JSX.Element {
  const { loading, setLoading } = useFlashListViewModel();

  const renderItem = useCallback(
    ({ item }: { item: any }) => {
      return renderComponent(item);
    },
    [renderComponent]
  );

  return (
    <FlashList
      data={data}
      key={listKey}
      refreshing={loading}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        setLoading(true); // trigger fetch more
      }}
      {...props}
    />
  );
}
