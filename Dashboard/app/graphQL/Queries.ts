import { gql } from '@apollo/client';

export const GetUserContext = gql`
  query GetUserContext(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
  ) {
    getUserContext(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
      }
    ) {
      associations {
        employerId
        memberId
      }
      redirectLink
    }
  }
`;

export const GetMemberPolicySummary = gql`
  query GetMemberPolicySummary(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $memberId: String!
  ) {
    getMemberPolicySummary(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
        memberId: $memberId
      }
    ) {
      memberPolicySummaryList {
        planId
        planName
        policyCurrency
        policyId
        policyStatus
        policyValue
      }
    }
  }
`;

export const GetInvestments = gql`
  query GetInvestments(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $policyId: String!
  ) {
    getInvestments(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
        policyId: $policyId
      }
    ) {
      investmentList {
        contributionSource
        riskProfileStrategy {
          label
          value
          icon
        }
        fundDetails {
          fundId
          fundName
          allocation
        }
      }
    }
  }
`;

export const GetContributionHistory = gql`
  query GetContributionHistory(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $policyId: String!
  ) {
    getContributionHistory(
      request: {
        policyId: $policyId
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
      }
    ) {
      contributionDetails {
        contributionHistory {
          contributions {
            contributionDetails {
              dueDate
              contributionSource
              amount
              paymentStatus
            }
          }
        }
        contributionsSummaryDetails {
          dateOfCalculation
          title
          currency
          amount
          subtractionBrackets
          date
        }
      }
    }
  }
`;

export const GetBeneficiaries = gql`
  query GetBeneficiaries(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $policyId: String!
  ) {
    getBeneficiaries(
      request: {
        policyId: $policyId
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
      }
    ) {
      beneficiaries {
        clientId
        title
        firstName
        middleName
        lastName
        dateOfBirth
        guardian {
          guardianId
        }
      }
    }
  }
`;
export const GetBeneficiariesDetailed = gql`
  query GetBeneficiaries(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $policyId: String!
  ) {
    getBeneficiaries(
      request: {
        policyId: $policyId
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
      }
    ) {
      beneficiaries {
        clientId
        title
        firstName
        middleName
        lastName
        dateOfBirth
        relationship
        allocation
        contact {
          emailAddress
          phone {
            mobile
            home
            work
          }
          physicalAddress {
            addressLine1
            addressLine2
            addressLine3
            postCode
            country
          }
          mailingAddress {
            addressLine1
            addressLine2
            addressLine3
            postCode
            country
          }
        }
        guardian {
          guardianId
          title
          firstName
          middleName
          lastName
          dateOfBirth
          contact {
            emailAddress
            phone {
              mobile
              home
              work
            }
            physicalAddress {
              addressLine1
              addressLine2
              addressLine3
              postCode
              country
            }
            mailingAddress {
              addressLine1
              addressLine2
              addressLine3
              postCode
              country
            }
          }
        }
      }
    }
  }
`;

export const GetContributionSummary = gql`
  query GetContributionSummary(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $policyId: String!
  ) {
    getContributionSummary(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
        policyId: $policyId
      }
    ) {
      employeeContribution
      employerContribution
    }
  }
`;

export const GetPensionSummary = gql`
  query GetPensionSummary(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $policyId: String!
  ) {
    getPensionSummary(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
        policyId: $policyId
      }
    ) {
      pensionSummary {
        dateOfCalculation
        name
        xAxisLabels
        datasets {
          label
          data
        }
      }
    }
  }
`;

export const GetPersonalDetails = gql`
  query GetMemberDetailsByMemberId(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $memberId: String!
  ) {
    getMemberDetailsByMemberId(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
        memberId: $memberId
      }
    ) {
      member {
        memberId
        firstName
        middleName
        lastName
        dateOfBirth
        gender
        maritalStatus
        contact {
          emailAddress
          phone {
            mobile
            home
            work
          }
          physicalAddress {
            addressLine1
            addressLine2
            addressLine3
            postCode
            country
          }
          mailingAddress {
            addressLine1
            addressLine2
            addressLine3
            postCode
            country
          }
        }
        communicationPreferences {
          contact {
            email
            phone
            post
          }
          correspondence {
            email
            post
          }
          benefitStatement {
            email
            post
          }
        }
      }
    }
  }
`;

export const GetBeneficiaryRelationship = gql`
  query getAllStandingDataByCategory(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
  ) {
    getAllStandingDataByCategory(
      session: {
        requestId: $requestId
        percanaSessionId: $percanaSessionId
        managementCompanyId: $managementCompanyId
        clientTime: $clientTime
      }
    ) {
      beneficiaryRelationship
      title
    }
  }
`;

export const GetAllFundDetails = gql`
  query GetAllFundDetails(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $policyId: String!
  ) {
    getAllFundDetails(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
        policyId: $policyId
      }
    ) {
      totalContributionBalance
      totalVestedBalance
      fundAllocationDetails {
        allocation
        fundName
        priceDate
        unitPrice
        units
        fundValue
        fundDetailWithContributions {
          date
          source
          priceDate
          unitPrice
          units
          contributionAmount
          currency
        }
      }
      contributionSourceInformation {
        sourcePercentage
        contributionSource
        balance
        vestedBalance
      }
      performance {
        dateOfCalculation
        xAxisLabels
        datasets {
          label
          data
        }
      }
    }
  }
`;

export const VerifyOtp = gql`
  query verifyOtp(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $tenantId: String!
    $key: String!
    $receiver: String!
    $digitalCode: String!
  ) {
    verifyOtp(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
          tenantId: $tenantId
        }
        key: $key
        receiver: $receiver
        digitalCode: $digitalCode
      }
    ) {
      status
      key
    }
  }
`;

export const GetCountries = gql`
  query getAllStandingDataByCategory(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
  ) {
    getAllStandingDataByCategory(
      session: {
        requestId: $requestId
        percanaSessionId: $percanaSessionId
        managementCompanyId: $managementCompanyId
        clientTime: $clientTime
      }
    ) {
      addressCountries
    }
  }
`;

export const GetTransactionHistory = gql`
  query GetTransactionHistory($memberId: String!) {
    getTransactionHistory(memberId: $memberId) {
      tableDefinitions {
        tableColumns {
          columnName
          columnSource
          columnType
          lookupCode
        }
      }
      transactions {
        amount
        date
        fundAllocations {
          allocation
          fundCode
          fundName
          previousSelection
        }
        status
        transactionType
      }
    }
  }
`;

export const GetBGHistory = gql`
  query GetBeneficiaryAndGuardianHistory(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $policyId: String!
  ) {
    getBeneficiaryAndGuardianHistory(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
        policyId: $policyId
      }
    ) {
      beneficiaryAndGuardianClients {
        clientId
        contact {
          emailAddress
          mailingAddress {
            addressLine1
            addressLine2
            addressLine3
            addressee
            country
            postCode
          }
          phone {
            fax
            home
            mobile
            work
          }
          physicalAddress {
            addressLine1
            addressLine2
            addressLine3
            addressee
            country
            postCode
          }
        }
        dateOfBirth
        firstName
        lastName
        middleName
        title
      }
    }
  }
`;
