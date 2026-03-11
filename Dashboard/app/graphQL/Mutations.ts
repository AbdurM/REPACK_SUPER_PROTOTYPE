import { gql } from '@apollo/client';

export const CreateSession = gql`
  mutation CreateSession(
    $requestId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $managementCo: String!
    $operatorId: String!
    $locale: String!
    $role: String!
    $timeout: Int!
  ) {
    createSession(
      session: {
        requestId: $requestId
        managementCompanyId: $managementCompanyId
        clientTime: $clientTime
      }
      request: {
        percanaHeader: {
          managementCo: $managementCo
          operatorId: $operatorId
          locale: $locale
        }
        role: $role
        timeout: $timeout
      }
    ) {
      success
      percanaHeader {
        guid
      }
    }
  }
`;

export const UpdatePersonalDetails = gql`
  mutation UpdateMemberDetailsByMemberId(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $employerId: Int!
    $planId: Int!
    $member: MemberDetailsInput!
  ) {
    updateMemberDetailsByMemberId(
      request: {
        employerId: $employerId
        planId: $planId
        member: $member
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
      }
    ) {
      member {
        memberId
        planCountryCode
        staffId
        taxId
        title
        firstName
        middleName
        lastName
        dateOfBirth
        gender
        hireDate
        leaverDate
        participationDate
        status
        residentialStatus
        residentialStatusDate
        emailAddress
        maritalStatus
        numberOfChildrenUnder18
        occupation
        digitalRegistrationStatus
        externalClientID
        planId
        employerId
        policyId
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

export const SaveBeneficiaries = gql`
  mutation SaveBeneficiaries(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $policyId: String!
    $memberId: String
    $beneficiaries: [BeneficiaryActionDetail]
  ) {
    saveBeneficiaries(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
        }
        policyId: $policyId
        memberId: $memberId
        beneficiaryActionDetailList: $beneficiaries
      }
    ) {
      beneficiaries {
        clientId
      }
      problems {
        type
        title
        status
      }
    }
  }
`;

export const GenerateOtp = gql`
  mutation generateOtp(
    $requestId: String!
    $percanaSessionId: String!
    $managementCompanyId: String!
    $clientTime: String!
    $tenantId: String!
    $emailAddress: String
    $phoneAddress: String
    $sendOption: String!
  ) {
    generateOtp(
      request: {
        session: {
          requestId: $requestId
          percanaSessionId: $percanaSessionId
          managementCompanyId: $managementCompanyId
          clientTime: $clientTime
          tenantId: $tenantId
        }
        sendOption: $sendOption
        email: $emailAddress
        phone: $phoneAddress
      }
    ) {
      status
      key
    }
  }
`;

export const AddBeneficiaryWithGuardian = gql`
  mutation AddBeneficiaryWithGuardian(
    $requestId: String!
    $managementCompanyId: String!
    $policyId: String!
    $beneficiary: BeneficiaryWithGuardianInput!
  ) {
    addBeneficiaryWithGuardian(
      request: {
        session: {
          requestId: $requestId
          managementCompanyId: $managementCompanyId
        }
        policyId: $policyId
        beneficiary: $beneficiary
      }
    ) {
      beneficiary {
        clientId
        guardian {
          guardianId
        }
      }
      
      problems {
        type
        title
        status
      }
    }
  }
`;

export const UpdateBeneficiaryWithGuardian = gql`
  mutation UpdateBeneficiaryWithGuardian(
    $requestId: String!
    $managementCompanyId: String!
    $policyId: String!
    $beneficiary: BeneficiaryWithGuardianInput!
  ) {
    updateBeneficiaryWithGuardian(
      request: {
        session: {
          requestId: $requestId
          managementCompanyId: $managementCompanyId
        }
        policyId: $policyId
        beneficiary: $beneficiary
      }
    ) {
      beneficiary {
        clientId
        guardian {
          guardianId
        }
      }
      problems {
        type
        title
        status
      }
    }
  }
`;

export const SaveUpdatedBeneficiaries = gql`
  mutation SaveUpdatedBeneficiaries(
    $requestId: String!
    $managementCompanyId: String!
    $policyId: String!
    $beneficiary: [MemberBeneficiary]
  ) {
    saveUpdatedBeneficiaries(
      request: {
        session: {
          requestId: $requestId
          managementCompanyId: $managementCompanyId
        }
        policyId: $policyId
        beneficiary: $beneficiary
      }
    ) {
      beneficiaries {
        clientId
      }
      problems {
        type
        title
        status
      }
    }
  }
`;


