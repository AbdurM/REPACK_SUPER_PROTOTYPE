export const UtilitiesFunctions = {
  getGraphqlHeader: function (token: string, headers: Object) {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  },
};

export const TenantConstants = {
  TenantId: 'Lunate',
  callingcode: '+971',
  Currency: 'AED ',
  Uri: {
    RedirectUrl: 'lunateapp:/oauthredirect',
    TermsAndConditions: 'https://ghafbenefits.com/en/terms-of-use/',
    PrivacyPolicy: '',
  },
};
