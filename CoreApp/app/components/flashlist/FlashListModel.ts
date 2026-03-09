// generated from template

import React from "react";

interface FlashListViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userData: userModel;
  setUserData: React.Dispatch<React.SetStateAction<userModel>>;
}

interface FlashListViewProps {
  keyValue: string;
  listKey?: string;
  data: any[];
  renderComponent?: (item: any) => React.JSX.Element;
  keyExtractor?: (item: any, index: number) => string;
  props?: any;
}

interface userModel {
  arrayData: any[];
  objectData: Record<string, any>;
  stringData: string;
  booleanData: boolean;
}

// Default props
const defaultProps: FlashListViewProps = {
  keyValue: "",
  listKey: "",
  data: [],
  // renderComponent: () => React.createElement('div'),
  keyExtractor: (item: any, index: number) => `${item?.id || index}`,
  props: {},
};

export type { FlashListViewProps, FlashListViewModel, userModel };
export { defaultProps };