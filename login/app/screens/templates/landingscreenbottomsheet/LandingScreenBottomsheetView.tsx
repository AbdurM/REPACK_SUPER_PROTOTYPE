// Generated from Fingent Boilerplate

import React from 'react';
import { View, Image } from 'react-native';
import {
  LandingScreenBottomsheetProps,
  defaultProps,
} from './LandingScreenBottomsheetModel';
import { LandingScreenBottomsheetStyles } from './LandingScreenBottomsheetStyle';
import { BottomSheetView } from 'components/bottomsheet/BottomSheetView';
import { BottomSheetHeaderView } from 'templates/bottomsheetheader/BottomSheetHeaderView';
import { CustomTextView } from 'components/customtext/CustomTextView';
import { ButtonView } from 'components/button/ButtonView';
import { Theme, Strings } from 'utilities/TenantIndex';
import { APP_IMAGES } from 'utilities/Images';

export function LandingScreenBottomsheetView(
  props: Readonly<LandingScreenBottomsheetProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { bottomSheetRef, onPressClose, confirmBiometric, setLoginMode, images } =
    mergedProps;

  return (
    <BottomSheetView
      format="compose"
      portalName={'LandingScreenPortal'}
      ref={bottomSheetRef}
      size="large"
      enablePanDownToClose={false}
      onClose={onPressClose ?? (() => {})}
      onBack={onPressClose ?? (() => {})}
      back={false}
      close={false}
      backDrop={true}
    >
      <View style={LandingScreenBottomsheetStyles.container}>
        <BottomSheetHeaderView
          back={true}
          close={true}
          closeOnPress={onPressClose}
          backOnPress={onPressClose}
        />
        <View style={[LandingScreenBottomsheetStyles.iconContainer]}>
          <CustomTextView variant="h3" color={Theme.Colors.neutral5}>
            {Strings.landingPage.activateYourBiometrics}
          </CustomTextView>
          <CustomTextView
            variant="body_m_n1"
            style={LandingScreenBottomsheetStyles.descriptionTextStyle}
            color={Theme.Colors.neutral2}
          >
            {Strings.landingPage.activateYourBiometricsDescription}{' '}
          </CustomTextView>
          <Image
            source={images?.FACE_ID || APP_IMAGES.FACE_ID}
            resizeMode="contain"
            style={LandingScreenBottomsheetStyles.logoStyleBottomSheet}
          />
        </View>
        <View style={LandingScreenBottomsheetStyles.buttonView}>
          <ButtonView
            testID="3"
            buttonText={Strings.landingPage.activateYourBiometrics}
            onPress={confirmBiometric ?? (() => {})}
          />
          <ButtonView
            testID="4"
            buttonText={Strings.landingPage.loginWithEmailPassword}
            onPress={() => setLoginMode?.('EMAIL')}
            filled={false}
            color={Theme.Colors.primary1}
          />
        </View>
      </View>
    </BottomSheetView>
  );
}
