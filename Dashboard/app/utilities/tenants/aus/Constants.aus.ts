// AUS tenant-specific PersonalDetails configuration

// Field IDs from createPersonalDetailsConfig
export const CONSTANTS = {
    PERSONAL_DETAILS_FIELD_IDS : {
    personal_information: [
        'full_name',
        'gender',
        'date_of_birth',
        'id_number',
        'email_address',
        'tax_file_number',
        'ato_super_match_consent',
        'mobile_number',
        'phone_number',
        'physical_address',
        'postal_address',
    ]
    }
    }
    
    // AUS specific field order:
    // 1. Name, 2. Gender, 3. Date of birth, 4. Member id
    // 5. Email address, 6. TFN, 7. ATO, 8. Mobile number
    // 9. Phone number, 10. Residential address, 11. Postal address
    