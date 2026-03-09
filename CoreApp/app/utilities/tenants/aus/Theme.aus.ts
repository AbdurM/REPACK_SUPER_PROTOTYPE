import { useContext, useMemo } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import {ThemeColors} from '../../UtilitiesModel';
import { Platform, StyleSheet } from 'react-native';

export const Theme = {
  Colors: {} as ThemeColors, // Use colors object for common color values for dark and liaght
  Light: {
    primary1: '#0660D4',
    primary2: '#0549A1',
    primary3: '#003882',

    secondary1: '#0077C8',
    secondary2: '#6BB5E9',
    secondary3: '#C2E5FF',
    secondary4: '#E5F4FF',

    semantic1: '#009688',
    semantic2: '#038675',
    semantic3: '#085E53',
    semantic4: '#E5F4F3',

    informational1: '#0063F7',
    informational2: '#E6F0FF',

    warning1: '#F76D43',
    warning2: '#FDF1E7',
    warning3: '#F7B258',
    error1: '#C13439',
    error2: '#BF1F1D',
    error3: '#F9E9EA',

    neutral1: '#65778B',
    neutral2: '#475F7B',
    neutral3: '#394B62',
    neutral4: '#5275A1',
    neutral5: '#2F3C4B',
    neutral6: '#A1AEBE',
    neutral7: '#C9D4E2',
    neutral8: '#1A202C',
    neutral9: '#E9EEF5',
    neutral10: '#FFFFFF',

    background1: '#FFFFFF',
    background2: '#F5F8FC',
    background3: '#ECF4FB',
    background4: 'rgba(1, 11, 49, 0.9)',
    
    activeState: '#C2E5FF40',
    pieChartColors: [ '#F15B84', '#FFB74D', '#3F51B5', '#673AB7', '#71EDCF'],
    investmentSummaryColors: ['#0077C8', '#6BB5E9', '#C2E5FF'],
  } as ThemeColors, // Use Light object for loght color values for light theme
  Dark: {
    primary1: '#0660D4',
    primary2: '#0549A1',
    primary3: '#003882',

    secondary1: '#0077C8',
    secondary2: '#6BB5E9',
    secondary3: '#C2E5FF',
    secondary4: '#E5F4FF',

    semantic1: '#009688',
    semantic2: '#038675',
    semantic3: '#085E53',
    semantic4: '#E5F4F3',

    informational1: '#0063F7',
    informational2: '#E6F0FF',

    warning1: '#F76D43',
    warning2: '#FDF1E7',
    warning3: '#F7B258',
    error1: '#C13439',
    error2: '#BF1F1D',
    error3: '#F9E9EA',

    neutral1: '#65778B',
    neutral2: '#475F7B',
    neutral3: '#394B62',
    neutral4: '#5275A1',
    neutral5: '#2F3C4B',
    neutral6: '#A1AEBE',
    neutral7: '#C9D4E2',
    neutral8: '#1A202C',
    neutral9: '#E9EEF5',
    neutral10: '#FFFFFF',

    background1: '#FFFFFF',
    background2: '#F5F8FC',
    background3: '#ECF4FB',
    background4: 'rgba(1, 11, 49, 0.9)',
    
    activeState: '#C2E5FF40',

    pieChartColors: [ '#0660D4', '#F7B258', '#E74173', '#673AB7', '#71EDCF'],
    investmentSummaryColors: ['#0077C8', '#6BB5E9', '#C2E5FF'],
  } as ThemeColors, // Use Dark object for dark color values for dark theme
  themeSwitch: function (theme: string) {
    // theme color switching
    if (theme === 'dark') {
      this.Colors = {...this.Colors, ...this.Dark};
    } else {
      this.Colors = {...this.Colors, ...this.Light};
    }
  },
};

export const Font = {
  Title_regular: 'Montserrat-Regular',
  Title_medium: 'Montserrat-Medium',
  Title_semi_bold: 'Montserrat-SemiBold',
  Title_bold: 'Montserrat-Bold',
  Title_extra_bold: 'Montserrat-ExtraBold',

  Body_regular: Platform.select({
    ios: 'SFProDisplay-Regular',
    android: 'Roboto-Regular',
  }),
  Body_medium: Platform.select({
    ios: 'SFProDisplay-Medium',
    android: 'Roboto-Medium',
  }),
  Body_semi_bold: Platform.select({
    ios: 'SFProDisplay-SemiBold',
    android: 'Roboto-Medium', //Roboto doesn't include an '600' font weight (Semi Bold), so we use the Roboto Medium font with a '500' weight, which is a close alternative.
  }),
  Body_bold: Platform.select({
    ios: 'SFProDisplay-Bold',
    android: 'Roboto-Bold',
  }),
  Body_extra_bold: Platform.select({
    ios: 'SFProDisplay-Heavy',
    android: 'Roboto-Black', //Roboto doesn't include an '800' font weight (Extra Bold), so we use the Roboto Black font with a '900' weight, which is a close alternative.
  }),
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);

  // Memoize styles based on the theme to avoid unnecessary recalculations
  const colorStyles = useMemo(() => StyleSheet.create({
    BUTTON_COLOR: {
      // backgroundColor: Theme.Colors.BUTTON_COLOR,
    },
    WHITE_COLOR: {
      // color: Theme.Colors.TEXT,
    },
    // Add other global styles based on theme here
  }), [theme]);

  // Return the theme value, color styles, and raw colors
  return {
    theme,        // Complete theme object
    Theme,       // Raw colors for direct usage
    colorStyles,  // Predefined styles for usage in components
  };
};
