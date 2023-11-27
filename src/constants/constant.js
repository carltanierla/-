export default {
    
    /**
     * Company List
     */
    COMPANY: [
        {
            'id': 1,
            'company_name': 'Company 1'
        },
        {
            'id': 2,
            'company_name': 'Company 2'
        },
        {
            'id': 3,
            'company_name': 'Company 3'
        },
    ],

    /**
     * Department List
     */
    DEPARTMENT: [
        {
            id: 1,
            company_id: 1,
            department_name: 'IT Department'
        },
        {
            id: 2,
            company_id: 1,
            department_name: 'HR Department'
        },
        {
            id: 3,
            company_id: 2,
            department_name: 'CS Department'
        },
        {
            id: 4,
            company_id: 2,
            department_name: 'Publishing Department'
        },
        {
            id: 5,
            company_id: 3,
            department_name: 'Developer Department'
        },
        {
            id: 6,
            company_id: 3,
            department_name: 'PM Department'
        },
    ],

    /**
     * Locations List
     */
    LOCATIONS: [
        {
            id: 1,
            department_id: 1,
            location_name: 'Pasig',
        },
        {
            id: 2,
            department_id: 2,
            location_name: 'Makati',
        },
        {
            id: 3,
            department_id: 2,
            location_name: 'Mandaluyong',
        }
    ]

}