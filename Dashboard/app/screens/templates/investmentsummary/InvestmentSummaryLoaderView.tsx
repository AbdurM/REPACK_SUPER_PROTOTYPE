import React from 'react';
import {Rect} from 'react-content-loader/native';
import {ContentLoaderView} from 'components/contentloader/ContentLoaderView';
import {Theme} from 'utilities/TenantIndex';
import {UI} from 'utilities/Helpers';

export function InvestmentSummaryLoaderView(): React.JSX.Element {
  return (
    <ContentLoaderView
      loadingContainerWidth={UI.responsiveWidth(100)}
      loadingContainerHeight={UI.responsiveHeight(32)}
      loadingForegroundColor={Theme.Colors.neutral7}
      loadingBackgroundColor={Theme.Colors.neutral9}>
      
       <Rect
        x={UI.responsiveWidth(0)} // x -> align in x Axis
        y={UI.responsiveWidth(0)} // y -> align in y Axis
        rx={UI.responsiveWidth(2.5)} // rx-> radius
        ry={UI.responsiveWidth(2.5)} // ry-> radius
        width={'92%'}
        height={UI.responsiveWidth(20)}
      />
       <Rect
        x={UI.responsiveWidth(0)} // x -> align in x Axis
        y={UI.responsiveWidth(24)} // y -> align in y Axis
        rx={UI.responsiveWidth(2.5)} // rx-> radius
        ry={UI.responsiveWidth(2.5)} // ry-> radius
        width={'92%'}
        height={UI.responsiveWidth(20)}
      />
       {/* <Rect
        x={UI.responsiveWidth(0)} // x -> align in x Axis
        y={UI.responsiveWidth(48)} // y -> align in y Axis
        rx={UI.responsiveWidth(2.5)} // rx-> radius
        ry={UI.responsiveWidth(2.5)} // ry-> radius
        width={'92%'}
        height={UI.responsiveWidth(20)}
      /> */}

    </ContentLoaderView>
  );
}
