import { Dimensions } from 'react-native';
import { generateUUIDV4 } from '../services/UUIDService';
// import { parsePhoneNumberFromString } from 'libphonenumber-js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {
  Navigation,
} from './UtilitiesModel';
import { RequestConstants } from './Constants';
// import store from '../store/Store';

export const UtilitiesFunctions = {
  // Function to calculate age from date of birth
  calculateAge: (dob: string): number => {
    if (!dob) return 0;
    // Parse the date with the format 'DD-MM-YYYY'
    const birthDate = moment(dob, 'YYYY-MM-DD', true);
    if (!birthDate.isValid()) {
      console.error('Invalid date format for DOB:', dob);
      return 0;
    }
    const today = moment();
    return today.diff(birthDate, 'years');
  },
  deepCopy: function<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  },
  getGQLHeader: function () {
    // const state = store.getState();
    // const createSessionData = state.auth.createSessionData;
    // const activePolicyId = state.app.activePolicyId;

    // return {
    //   requestId: UtilitiesFunctions.generateUUID(),
    //   percanaSessionId: createSessionData?.percanaId || 'null',
    //   managementCompanyId: RequestConstants.managementCompanyId,
    //   clientTime: new Date().getTime().toString(),
    //   policyId: activePolicyId,
    // };
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
  formatDate: function (dateString: string): string {
    if (!dateString) return '';
    return moment(dateString).format('DD/MM/YYYY');
  },
  parsePhoneNumber: function (
    input: string,
    defaultCountry?: string, // ISO-2, e.g. "IN"
  ) {
    // if (!input) return null;
    // const phone = parsePhoneNumberFromString(
    //   input.trim(),
    //   defaultCountry as any,
    // );

    // if (!phone) return null;

    // return {
    //   isValid: phone.isValid(),
    //   country: phone.country ?? null,
    //   callingCode: phone.countryCallingCode ?? null,
    //   nationalNumber: phone.nationalNumber ?? null,
    //   e164: phone.number ?? null,
    //   international: phone.formatInternational(),
    //   national: phone.formatNational(),
    // };
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
