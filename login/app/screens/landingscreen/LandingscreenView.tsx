// generated from template
import React from 'react';
import { View, Image } from 'react-native';
import useLandingscreenViewModel from './LandingscreenViewModel';
import { LandingscreenStyles } from './LandingscreenStyle';
import { CustomTextView } from 'components/customtext/CustomTextView';
import { Images, Strings, Theme } from 'utilities/TenantIndex';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonView } from 'components/button/ButtonView';
import { SvgGradientView } from 'components/svggradient/SvgGradientView';
import { LandingscreenViewProps, defaultProps } from './LandingscreenModel';
import { LandingScreenBottomsheetView } from '../templates/landingscreenbottomsheet/LandingScreenBottomsheetView';
import { LoaderView } from 'components/loader/LoaderView';
import { ElementKey } from 'utilities/ElementKey';
import { ThemeProvider } from 'context/ThemeContext';

export function LandingscreenView(
  props: Readonly<LandingscreenViewProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const {
    onPressLogIn,
    onPressClose,
    bottomSheetRef,
    openWebPage,
    confirmBiometric,
    loading,
    setLoginMode,
  } = useLandingscreenViewModel(mergedProps);
  const { images, onTokenReceived } = mergedProps;

  return (
    <ThemeProvider>
    <View style={LandingscreenStyles.container}>
      <SvgGradientView />
      <View style={LandingscreenStyles.logoView}>
        <Image
          // source={{uri:'http://localhost:8081/app/assets/uae/images/ssnc_logo.png'}}
          source={images.APP_LOGO || Images.APP_LOGO}
          resizeMode="contain"
          style={LandingscreenStyles.logoStyle}
        />
        <CustomTextView
          style={LandingscreenStyles.sloganText}
          color={Theme.Colors.neutral10}
          variant="h5"
        >
          {Strings.landingPage.slogan}
        </CustomTextView>
      </View>
      <View style={LandingscreenStyles.buttonView}>
        <SafeAreaView>
          <ButtonView
            testID={ElementKey.login_button}
            buttonText={Strings.common.logIn}
            onPress={onPressLogIn}
            filled={true}
          />
          <ButtonView
            testID="2"
            buttonText={Strings.landingPage.howToGetAccess}
            onPress={openWebPage || (() => {})}
            filled={false}
            color={Theme.Colors.neutral10}
          />
        </SafeAreaView>
      </View>
      <LandingScreenBottomsheetView
        keyValue="LandingScreenBottomsheet"
        bottomSheetRef={bottomSheetRef}
        onPressClose={onPressClose}
        confirmBiometric={confirmBiometric}
        setLoginMode={setLoginMode}
        images={images}
      />
      {loading && (
        <LoaderView size="large" type="global" keyValue="LandingscreenView" />
      )}
    </View>
    </ThemeProvider>
  );
}

export default LandingscreenView;
