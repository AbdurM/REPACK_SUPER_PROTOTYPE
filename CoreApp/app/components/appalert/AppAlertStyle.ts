// generated from template

import {StyleSheet} from 'react-native';
import { Colors } from 'utilities/Style';
import { UI } from 'utilities/Helpers';

export const AppAlertStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: UI.responsiveWidth(3),
    padding: UI.responsiveWidth(9),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: UI.responsiveWidth(3),
    padding: UI.responsiveWidth(3),
    elevation: 2,
    backgroundColor: '#2196F3',
    minWidth:'40%',
  },
  textStyle: {
    color: Colors.COLOR_WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: UI.responsiveWidth(3),
    textAlign: 'center',
  },
});
