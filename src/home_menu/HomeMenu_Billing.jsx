import React from 'react'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_Bill() {

const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
const menuConfig_Billing = {
    services: {
        icon: service,
        title: "Services",
        items: [
            'Cash Collection',
            'Ipd Bill Processing',
            'Fund Flow',
            'Day End Process Combined',
            'Receipt Duplicate Print',
            'Refund Request',
            'Online Refund Approval',
            'Ipd Bill Reopen',
            'Online Bill Cancellation',
            'Online Request Cancellation',
            'I P D Bill Reopen',
            'Third Party Bills',
        ],
    },

    setup: {
        icon: setup,
        title: "Setup",
        items: [
            'Advance Master',
            'Billing Config',
            'Billing Counter Master',
            'Charge Master',
            'Charge Rule Master',
            'Client Charge Master',
            'Client Master',
            'Group Master',
            'Hospital Service Group Master',
            'Package Service Master',
            'Patient Category And Payment Mode Master',
            'Tariff Master',
        ],
    },

    reports: {
        icon: report,
        title: "Reports",
        items: [
            'Fee Collection Details Report',
            'Payment Details Report',
            'Refund Details Report',
            'Bill Cancellation Log Report',
            'Tariff Wise Zero Billing',
            'Day End Duplicate Report New',
            'Consolidated Report Old',
            'Hospital Expenditure Report',
            'Day End Dashboard',
            'Consolidated Report',
            'Fee Collection Details',
            'Patient Investigation Charges Report',
            'Patient Investigations With Charges',
            'Payment Details',
            'Ipd Provisional Bill',
            'Summarised Opd Statistics',
            'Department Wise Billing Report',
            'Third Party Bill Report',
        ],
    },
};

  return (
    <div>
       <CommonMenuPage 
       menuConfig={menuConfig_Billing}
       modules={["services", "setup", "reports"]} />
    </div>
  )
}


export default Homemenu_Bill
