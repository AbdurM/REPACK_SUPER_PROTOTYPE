import { Dimensions } from 'react-native';
import { generateUUIDV4 } from '../services/UuidService';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Navigation,
} from './UtilitiesModel';

export const UtilitiesFunctions = {
  deepCopy: function<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  },
  getRouteName: function (navigation: Navigation) {
    return navigation?.getState()?.routes[navigation.getState()?.index]?.name;
  },
  checkEmail: function (email: string): boolean {
    const reg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email) {
      return reg.test(email);
    }
    return false;
  },
  checkPhone: function (string: string): boolean {
    const reg = /^[0-9]{7,10}$/;
    if (string) {
      return reg.test(string);
    } else {
      return false;
    }
  },
  generateUUID: function (): string {
    return generateUUIDV4();
  },
  formatAmount: function (amount: number): string {
    if (amount === null || amount === undefined) return '0.00';
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  },
};

export const UI = {
  responsiveHeight: function (h: number): number {
    return Math.round(hp(`${h}%`));
  },

  responsiveWidth: function (w: number): number {
    return Math.round(wp(`${w}%`));
  },

  responsiveFontSize: function (f: number): number {
    const { height, width } = Dimensions.get('window');
    return Math.sqrt(height * height + width * width) * (f / 100);
  },
};
