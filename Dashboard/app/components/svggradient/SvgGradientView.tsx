// Generated from Fingent Boilerplate

import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';
import { SvgGradientStyles } from './SvgGradientStyle';
import { SvgGradientViewProps, defaultProps } from './SvgGradientModel';
import { Theme } from 'utilities/TenantIndex';

export function SvgGradientView(
  props: Readonly<SvgGradientViewProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };

  const svgContent = (
    <View style={SvgGradientStyles.container}>
      <Svg>
        {/* Svg is the root element for the SVG. */}
        {/* Defs is used to define reusable elements (like gradients). */}
        <Defs>
          <RadialGradient
            id="grad" //This gives the gradient an ID so it can be referenced later.
            cx={'50%'} //The x-coordinate of the center of the gradient.
            cy={'45%'} //The y-coordinate of the center of the gradient
            rx={'50%'} //The x-radius of the gradient
            ry={'45%'} //The y-radius of the gradient
            fx={'50%'} //The x-coordinate of the focal point of the gradient.
            fy={'45%'} //The y-coordinate of the focal point of the gradient
            gradientUnits="userSpaceOnUse" //This attribute specifies that the gradient's coordinate system is relative to the user space.
          >
            <Stop
              offset="5%" //This specifies that the gradient starts at 0% of the way across the gradient.
              stopColor={
                mergedProps.innerGradientColor || Theme.Colors.primary1
              } //This specifies that the color at this stop is white.
              stopOpacity="1" //This specifies that the opacity at this stop is 100%.
            />
            <Stop
              offset="100%"
              stopColor={
                mergedProps.outerGradientColor || Theme.Colors.primary3
              }
              stopOpacity="1"
            />
          </RadialGradient>
          <View style={SvgGradientStyles.childrencontainer}>
            {mergedProps.children}
          </View>
        </Defs>
        <Rect
          x="0"
          y="0"
          width={'100%'}
          height={'100%'}
          fill="url(#grad)"
          rx={mergedProps.borderRadius}
          ry={mergedProps.borderRadius}
          strokeWidth={mergedProps.borderWidth}
          stroke={mergedProps.borderColor}
        />
      </Svg>
    </View>
  );

  return props.containerStyle ? (
    <View style={props.containerStyle}>
      {svgContent}
    </View>
  ) : (
    svgContent
  );
}
