import { Platform, StyleSheet } from 'react-native';
import { UI } from './Helpers';
import {
  GlobalStylesProps,
  FontSizeProps,
  LineHeightProps,
  TypographyStylesProps,
  BottomTabStylesProps,
} from './UtilitiesModel';
import { Theme, Font } from './TenantIndex';

export const Fontsize: FontSizeProps = {
  ten: UI.responsiveWidth(2.5),
  eleven: UI.responsiveWidth(2.75),
  twelve: UI.responsiveWidth(3),
  thirteen: UI.responsiveWidth(3.25),
  fourteen: UI.responsiveWidth(3.5),
  fifteen: UI.responsiveWidth(3.75),
  sixteen: UI.responsiveWidth(4),
  seventeen: UI.responsiveWidth(4.25),
  eighteen: UI.responsiveWidth(4.5),
  twenty: UI.responsiveWidth(5),
  twentTwo: UI.responsiveWidth(5.5),
  twentyFour: UI.responsiveWidth(6),
  twentySix: UI.responsiveWidth(6.5),
  twentyEight: UI.responsiveWidth(7),
  thirty: UI.responsiveWidth(7.5),
  thirtyTwo: UI.responsiveWidth(8),
  fourtyTwo: UI.responsiveWidth(10.5),
  fiftyTwo: UI.responsiveWidth(13),
};

export const LineHeight: LineHeightProps = {
  n: UI.responsiveWidth(10.25),
  h1: UI.responsiveWidth(9.25),
  h2: UI.responsiveWidth(8),
  h3: UI.responsiveWidth(8),
  h4: UI.responsiveWidth(7.5),
  h5: UI.responsiveWidth(5.5),
  h6: UI.responsiveWidth(5.5),
  h7: UI.responsiveWidth(5.25),
  h8: UI.responsiveWidth(5),
  bn1: UI.responsiveWidth(4.75),
  bn2: UI.responsiveWidth(4.5),
  bn3: UI.responsiveWidth(5.25),
  bn4: UI.responsiveWidth(5),
};

export const GlobalStyles = StyleSheet.create<GlobalStylesProps>({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: Theme.Colors.neutral1,
    paddingTop: 0,
  },
  flexGrow: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  // elevatedShadow: {
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: Theme.Colors.neutral1,
  //       shadowOffset: { width: 1, height: 2 },
  //       shadowOpacity: 0.3,
  //       // shadowRadius: 6,
  //     },
  //     android: {
  //       shadowColor: Theme.Colors.neutral1,
  //       shadowOpacity: 0.15,
  //       shadowOffset: { width: 0, height: 2 },
  //       shadowRadius: 4,
  //       elevation: 3,
  //     },
  //   }),
  // },
  cardShadow: {
    ...Platform.select({
      ios: {
        shadowColor: Theme.Colors.neutral8,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        shadowColor: Theme.Colors.neutral8,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
      },
    }),
  },
});

export const TypographyStyles = StyleSheet.create<TypographyStylesProps>({
  // Text Styles
  defaultTextStyle: {
    fontFamily: Font.Body_regular,
    color: Theme.Colors.neutral8,
    fontSize: Fontsize.fifteen,
    letterSpacing: 0,
    lineHeight: LineHeight.bn2,
    fontWeight: '400',
  },
  n1: {
    fontSize: Fontsize.fiftyTwo,
    fontFamily: Font.Title_semi_bold,
    letterSpacing: -0.01 * Fontsize.fiftyTwo,
    lineHeight: LineHeight.n,
    fontWeight: '600',
  },
  n2: {
    fontSize: Fontsize.fourtyTwo,
    fontFamily: Font.Title_semi_bold,
    letterSpacing: -0.01 * Fontsize.fourtyTwo,
    lineHeight: LineHeight.n,
    fontWeight: '600',
  },
  h1: {
    fontSize: Fontsize.thirty,
    fontFamily: Font.Title_medium,
    letterSpacing: -0.015 * Fontsize.thirty,
    lineHeight: LineHeight.h1,
    fontWeight: '500',
  },
  h2: {
    fontSize: Fontsize.twentyEight,
    fontFamily: Font.Title_semi_bold,
    letterSpacing: -0.005 * Fontsize.twentyEight,
    lineHeight: LineHeight.h2,
    fontWeight: '600',
  },
  h3: {
    fontSize: Fontsize.twentySix,
    fontFamily: Font.Title_medium,
    letterSpacing: -0.015 * Fontsize.twentySix,
    lineHeight: LineHeight.h3,
    fontWeight: '500',
  },
  h4: {
    fontSize: Fontsize.twentyFour,
    fontFamily: Font.Title_semi_bold,
    letterSpacing: -0.01 * Fontsize.twentyFour,
    lineHeight: LineHeight.h4,
    fontWeight: '600',
  },
  h5: {
    fontSize: Fontsize.twenty,
    fontFamily: Font.Title_regular,
    letterSpacing: -0.0041 * Fontsize.twenty,
    lineHeight: LineHeight.h5,
    fontWeight: '400',
  },
  h6: {
    fontSize: Fontsize.eighteen,
    fontFamily: Font.Title_bold,
    letterSpacing: 0,
    lineHeight: LineHeight.h6,
    fontWeight: 'bold',
  },
  h7: {
    fontSize: Fontsize.sixteen,
    fontFamily: Font.Title_semi_bold,
    letterSpacing: 0,
    lineHeight: LineHeight.h7,
    fontWeight: '600',
  },
  h8: {
    fontSize: Fontsize.sixteen,
    fontFamily: Font.Title_medium,
    letterSpacing: 0,
    lineHeight: LineHeight.h8,
    fontWeight: '500',
  },
  body_l_n1: {
    fontSize: Fontsize.sixteen,
    fontFamily: Font.Body_regular,
    letterSpacing: 0,
    lineHeight: LineHeight.h8,
    fontWeight: '400',
  },
  body_l_n2: {
    fontSize: Fontsize.sixteen,
    fontFamily: Font.Body_medium,
    letterSpacing: 0,
    lineHeight: LineHeight.bn1,
    fontWeight: '500',
  },
  body_l_n3: {
    fontSize: Fontsize.sixteen,
    fontFamily: Font.Body_bold,
    letterSpacing: 0,
    lineHeight: LineHeight.bn1,
    fontWeight: 'bold',
  },
  body_m_n1: {
    fontSize: Fontsize.fifteen,
    fontFamily: Font.Body_regular,
    letterSpacing: 0,
    lineHeight: LineHeight.bn1,
    fontWeight: '400',
  },
  body_m_n2: {
    fontSize: Fontsize.fifteen,
    fontFamily: Font.Body_medium,
    letterSpacing: 0,
    lineHeight: LineHeight.bn2,
    fontWeight: '500',
  },
  body_m_n3: {
    fontSize: Fontsize.fifteen,
    fontFamily: Font.Body_bold,
    letterSpacing: 0,
    lineHeight: LineHeight.bn2,
    fontWeight: 'bold',
  },
  body_s_n1: {
    fontSize: Fontsize.fourteen,
    fontFamily: Font.Body_regular,
    letterSpacing: 0,
    lineHeight: LineHeight.bn2,
    fontWeight: '400',
  },
  body_s_n2: {
    fontSize: Fontsize.fourteen,
    fontFamily: Font.Body_medium,
    letterSpacing: 0,
    lineHeight: LineHeight.bn3,
    fontWeight: '500',
  },
  bodys_n3: {
    fontSize: Fontsize.fourteen,
    fontFamily: Font.Body_bold,
    letterSpacing: 0,
    lineHeight: LineHeight.bn3,
    fontWeight: 'bold',
  },
  largeBtn: {
    fontSize: Fontsize.eighteen,
    fontFamily: Font.Body_semi_bold,
    letterSpacing: 0,
    lineHeight: LineHeight.bn3,
    fontWeight: '600',
  },
  formHeader: {
    fontSize: Fontsize.sixteen,
    fontFamily: Font.Body_semi_bold,
    letterSpacing: 0,
    lineHeight: LineHeight.bn1,
    fontWeight: '600',
  },
  link: {
    fontSize: Fontsize.sixteen,
    fontFamily: Font.Body_semi_bold,
    letterSpacing: 0,
    lineHeight: LineHeight.bn4,
    fontWeight: '600',
  },
  status: {
    fontSize: Fontsize.twelve,
    fontFamily: Font.Body_semi_bold,
    letterSpacing: 0,
    // lineHeight: LineHeight.n,
    fontWeight: '600',
  },
});

export const BottomTabStyles = StyleSheet.create<BottomTabStylesProps>({
  tabBarStyle: {
    height: UI.responsiveWidth(20),
    paddingLeft: UI.responsiveWidth(2),
    paddingRight: UI.responsiveWidth(2),
    paddingBottom: UI.responsiveWidth(2),
    // backgroundColor: Theme.Colors.neutral1,
    shadowColor: Theme.Colors.neutral8, // Shadow color
    shadowOffset: { width: 0, height: -8 }, // Position shadow on top
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 12, // Shadow radius for iOS
    elevation: 15, // Shadow for Android
  },
});
