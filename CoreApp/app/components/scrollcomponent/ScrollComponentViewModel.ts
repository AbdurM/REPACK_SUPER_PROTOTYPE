// generated from template

import { isCloseBottomSheetModel, ScrollComponentViewModel } from './ScrollComponentModel';

export default function useScrollComponentViewModel(): ScrollComponentViewModel {

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }: isCloseBottomSheetModel) => {
    const paddingToBottom = 100;
    return layoutMeasurement.height + contentOffset.y
      >= contentSize.height - paddingToBottom;
  };



  return { isCloseToBottom };
}
