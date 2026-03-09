// generated from template

import React from "react";
import {View, Modal, Pressable} from "react-native";
import {AppAlertStyles} from "./AppAlertStyle";
import { Strings } from "utilities/TenantIndex";
import useAppAlertViewModel from "./AppAlertViewModel";
import { CustomTextView } from "../customtext/CustomTextView";


export function AppAlertView(): React.JSX.Element {
  const { appAlert, appAlertData } = useAppAlertViewModel();

  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={appAlertData && appAlertData?.showAlert}
      onRequestClose={() => {
        appAlert();
      }}
    >
      <View style={AppAlertStyles.centeredView}>
        <View style={AppAlertStyles.modalView}>
          <CustomTextView style={AppAlertStyles.modalText}>
            {appAlertData?.title}
          </CustomTextView>
          <Pressable style={[AppAlertStyles.button]} onPress={() => appAlert()}>
            <CustomTextView style={AppAlertStyles.textStyle}>
              {appAlertData?.btnText}
            </CustomTextView>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
