import { useEffect, useRef } from 'react';
import { AppInactiveTime } from '../utilities/Constants';
import { Gesture, ManualGesture } from 'react-native-gesture-handler';
import { scheduleOnRN } from 'react-native-worklets';
import { verifyBiometricAuth } from './BiometricAuthentication';

export const useInactivityTimeout = (): ManualGesture => {
  const INACTIVITY_THRESHOLD = AppInactiveTime * 60 * 1000;
  // const inactivityTimer = useRef<NodeJS.Timeout | null>(null);

  // Effect to start/clear timer based on `isActivityTracked`
  useEffect(() => {

    return () => {
      // clearInactivityTimer(); // Clear timer on component unmount
    };
  }, []);

  // Clears the inactivity timer
  const clearInactivityTimer = () => {
    // if (inactivityTimer.current) {
    //   clearTimeout(inactivityTimer.current);
    //   inactivityTimer.current = null;
    // }
  };

  // Starts a new inactivity timer
  const startInactivityTimer = () => {
    clearInactivityTimer(); // Clear any existing timer before starting a new one
    // inactivityTimer.current = setTimeout(() => {
    //   // handleInactivity();
    // }, INACTIVITY_THRESHOLD);
  };

  // Handles inactivity timeout
  const handleInactivity = async () => {
    // logOut(LogoutTypes.soft); // Log out after inactivity
    // const loginInfoData = JSON.parse(
    //   (await getDataAsyncStorage('loginInfo')) ?? '{}',
    // );
    // if (loginInfoData?.loginMode === 'BIOMETRICS') {
    //   let biometricsAuth = await verifyBiometricAuth();
    //   if (biometricsAuth === 'SUCCESS') {
    //     startInactivityTimer();
    //   }
    //   if (['NOTENABLED', 'SYSTEMCANCEL', 'FAILURE'].includes(biometricsAuth)) {
    //     console.log('biometricsAuth:', biometricsAuth);
    //   }
    // }
  };

  // Updates the last interaction and resets the timer
  const updateLastInteraction = () => {
    // if (isActivityTracked) {
    //   startInactivityTimer(); // Start a new timer
    // }
  };

  // Gesture to capture user interactions
  const gesture = Gesture.Manual().onTouchesDown(() => {
    scheduleOnRN(updateLastInteraction); // Update interaction on touch
  });

  return gesture;
};
