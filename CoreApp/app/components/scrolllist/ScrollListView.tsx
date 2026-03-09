import React from "react";
import { FlatList, ActivityIndicator, RefreshControl } from "react-native";
import useScrollListViewModel from "./ScrollListViewModel";
import { ScrollListViewProps } from "./ScrollListModel";
import { ScrollListStyles } from "./ScrollListStyle";

export function ScrollListView({
  data = [],
  testID,
  style,
  renderItem,
  onEndReached,
  refreshing = false,
  scrollEventThrottle,
  isLoadingMore = false,
  contentContainerStyle,
  handleRefresh = () => {},
  keyExtractor = (item, index) => index.toString(),
}: ScrollListViewProps): React.JSX.Element {
  const { loading, setLoading } = useScrollListViewModel({});

  const renderFooter = () => {
    if (!isLoadingMore) return null;
    return (
      <ActivityIndicator
        style={ScrollListStyles.footer}
        size={"small"}
        color={"#000"} // change color according to app theme
      />
    );
  };

  return (
    <FlatList
      data={data}
      style={style}
      testID={testID}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={[
        ScrollListStyles.contentContainer,
        contentContainerStyle,
      ]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => handleRefresh()}
        />
      }
      scrollEventThrottle={scrollEventThrottle ?? 500}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={renderFooter()}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
    />
  );
}

export default ScrollListView;
