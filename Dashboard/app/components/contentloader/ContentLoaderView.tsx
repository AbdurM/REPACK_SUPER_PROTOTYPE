// generated from template

import React from 'react';
import ContentLoader from 'react-content-loader/native';
import {ContentLoaderViewProps} from './ContentLoaderModel';

export function ContentLoaderView({
  children,
  loadingContainerWidth,
  loadingContainerHeight,
  outerLineComponent,
  loadingBackgroundColor,
  loadingForegroundColor,
}: Readonly<ContentLoaderViewProps>): React.JSX.Element {

  return (
    <ContentLoader
      speed={0.4}
      beforeMask={outerLineComponent}
      width={loadingContainerWidth}
      height={loadingContainerHeight}
      backgroundColor={loadingBackgroundColor}
      foregroundColor={loadingForegroundColor}>
      {children}
    </ContentLoader>
  );
}
