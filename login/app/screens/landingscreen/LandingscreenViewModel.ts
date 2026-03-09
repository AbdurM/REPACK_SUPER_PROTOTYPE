// generated from template

import { useState, useEffect, useRef, useCallback } from "react";
import {
  LandingscreenViewModel,
  LandingscreenViewProps,
} from "./LandingscreenModel";
// import { useDispatch } from "react-redux";
import { appAuthLogin } from "services/AppAuthService";
import { BottomSheetRef } from "components/bottomsheet/BottomSheetModel";
import { Alert, Linking } from "react-native";
import { Strings, Theme } from "utilities/TenantIndex";
import { verifyBiometricAuth } from "services/BiometricAuthentication";
// import { getDataAsyncStorage, setDataAsyncStorage } from "services/StorageService";
import { checkNetworkState, setAxiosToken } from "services/RequestService";
// import { authActions } from "modules/auth/store/slice/AuthSlice";
// import { setData } from "services/EncryptedStorageService";
// import { UserAuthDataModel } from "../authenticate/AuthenticateModel";
// import { NavStates, StatusBarStyles } from "utilities/Constants";
// import { CommonActions, useFocusEffect, useNavigation } from "@react-navigation/native";
import { NavigationModel } from "utilities/UtilitiesModel";
// import { setGraphqlHeaders } from "services/GraphQLService";
import { useTheme } from "context/ThemeContext";

export default function useLandingscreenViewModel(props?: LandingscreenViewProps): LandingscreenViewModel {
  // const dispatch = useDispatch();
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loginInfo, setLoginInfo] = useState<any>(null);
  // const navigation = useNavigation<NavigationModel>();
  const { setStatusBarColor, setStatusBarTheme } = useTheme();
  
  // useFocusEffect(
  //   useCallback(() => {
  //     setStatusBarColor(Theme.Colors.background1);
  //     setStatusBarTheme(StatusBarStyles.light);
  //   }, [setStatusBarColor, setStatusBarTheme]),
  // );
  
  useEffect(() => {
    // getLoginInfo();

    // setTimeout(() => {
    //   bottomSheetRef.current?.expand();
    //   setLoading(false);
    // }, 1000);

 }, []);
 
  const onPressClose = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);

  // const getLoginInfo = async() => {
  //   const loginData = await getDataAsyncStorage('loginMode');
  //   setLoginInfo(loginData ?? '');
  // };
  
  const confirmBiometric = () => {
    Alert.alert(Strings.registrationPage.useBometric, Strings.registrationPage.useBometricDesc, [
      {
        text: Strings.common.noThanks,
        onPress: () => {console.log(Strings.common.noThanks);},
        style: 'cancel',
      },
      {text: Strings.common.yes, onPress: () => {
        doBiometricsAuth();
      }},
    ]);
  };
  
    /**
   * The function `doBiometricsAuth` checks for biometric authentication and navigates to the stay up
   * to date screen if successfull.
   */
    const doBiometricsAuth = () => {
      verifyBiometricAuth().then((biometricsAuth) => {
        if (biometricsAuth === 'SUCCESS') {
          // setLoginMode('BIOMETRICS');
          onPressClose();
        }
      });
    };

    /**
   * The function `setLoginMode` updates the authentication data with a new login mode and navigates to
   * the "Stay Up to Date" screen.
   * @param {String} loginMode - The `loginMode` parameter is a string that specifies the mode of
   * login, such as "email", "phone", "social", etc.
   */
  // const setLoginMode = (loginMode: string) => {
  //   setDataAsyncStorage('loginMode',  loginMode)
  //     .then(() => {
  //       navigateToNextScreen();
  //       onPressClose();
  //     })
  //     .catch(() => {
  //       // Handle error silently
  //     });
  // };

  /**
   * The function `onPressLogIn` handles the login process, including setting loading state,
   * authenticating with biometrics if enabled, and setting login data.
   */
  const handleLogin = async () => {
    setLoading(true);
    try {
      const netWorkState = await checkNetworkState();
      if(netWorkState.isConnected){
        const authStateData = await appAuthLogin();
        if(authStateData){
          if(loginInfo === 'BIOMETRICS'){
            const biometricsAuth = await verifyBiometricAuth();
            if (biometricsAuth === 'SUCCESS') {
              setLoginDatas(authStateData);
            }else{
              setLoading(false);
            }
          }else{
            setLoginDatas(authStateData);
          }
        }else{
          setLoading(false);
        }
      }else{
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  };

  const onPressLogIn = () => {
    // handleLogin();
    props?.onTokenReceived('authState.accessToken');
  };

  /**
   * The function `setLoginDatas` handles setting authentication data, dispatching actions, and
   * navigating based on user login and notification settings.
   * @param {any} authState - The `authState` parameter in the `setLoginDatas` function seems to
   * contain authentication-related data such as accessToken, accessTokenExpirationDate, refreshToken,
   * and tokenType. This data is used to set the user's authentication information and trigger certain
   * actions based on the user's login status and preferences.
   */
  const setLoginDatas = (authState: any) => {
    const authStateData = {
      accessToken: authState.accessToken,
      accessTokenExpirationDate: authState.accessTokenExpirationDate,
      refreshToken: authState.refreshToken,
      tokenType: authState.tokenType,
    };
    // setData({key: 'authData', data: authStateData});
    // dispatch(authActions.setAuthData());
    
    // Call the callback with the token
    if (props?.onTokenReceived && authState.accessToken) {
      props.onTokenReceived(authState.accessToken);
    }
    
    // setGraphqlHeaders(authState.accessToken);
    // setAxiosToken(authState.accessToken);
    setTimeout(() => {
      // dispatch(authActions.getUserInfo());
      // dispatch(authActions.getUserContextData());
      // dispatch(authActions.createSession());
     }, 300);
    setTimeout(() => {
      if(!loginInfo){
        bottomSheetRef.current?.expand();
      } else{
        navigateToNextScreen();
      }
      setLoading(false);
    }, 1000);
  };
  
  const navigateToNextScreen = () => {
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [
      //       {
      //         name: NavStates.stackNames.homeStack,
      //         state: {
      //           index: 0,
      //           routes: [{name: NavStates.tabNames.homeTab}],
      //         },
      //       },
      //     ],
      //   }),
      // );
    
  };
  
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const openWebPage = () => {
    Linking.openURL('https://www.ssctech.com/');
  }
  
  return { 
    onPressLogIn,
    doBiometricsAuth,
    onPressClose,
    bottomSheetRef,
    openBottomSheet,
    confirmBiometric,
    loading,
    // setLoginMode,
    openWebPage
  };
}
