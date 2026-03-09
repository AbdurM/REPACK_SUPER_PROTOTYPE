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
  TenantId: 'REI',
  callingcode: '+971',
  Currency: 'AED',
  Uri: {
    RedirectUrl: 'lunateapp:/oauthredirect',
    TermsAndConditions:
      'https://www.columbiathreadneedle.co.uk/en/retl/terms-and-conditions/',
    PrivacyPolicy: '',
  },
};
