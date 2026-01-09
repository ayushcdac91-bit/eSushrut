import React from 'react'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_Inventory() {

const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
    const menuConfig_Invantary = {
    services: {
        icon: service,
        title: "Services",
        items: [
            'Demand',
            'Issue',
            'Receive',
            'Return',
            'Order Management',
            'Query',
        ],
    },

    setup: {
        icon: setup,
        title: "Setup",
        items: [
            'Approving Authority Master',
            'Authority Hierarchy Details',
            'Authority Hierarchy Details -Old',
            'Committee Member Details',
            'Group Master-Old',
            'Generic Drug Master',
            'Drug Master -Old',
            'Generic Item Master',
            'Item Master',
            'Store Master-Old',
            'Store Category Master -Old',
            'Store Hierarchy Master -Old',
            'Store Item Master-Old',
            'Store Request Type Master',
            'Supplier Master',
            'Store Master',
            'Configuration Setup',
            'Configuration Setup-Old',
            'Drug Contradiction Master',
            'Drug Master',
            'Group Drug Alteration Master',
            'Group Master',
            'Report Parameter Configuration',
            'Report Template Configuration',
            'Store Category Master',
            'Store Hierarchy Master',
            'Store Item Master',
            'Store Request Type Master -Old',
            'Store Type Master',
            'Store Type Master -Old',
            'Sub Group Master',
            'Sub Group Master -Old',
            'Supplier Item Master',
            'Supplier Master -Old',
            'Supplier Type Master',
            'Unit Master',
            'Unit Value Master',
        ],
    },

    reports: {
        icon: report,
        title: "Reports",
        items: [
            'Stock In Hand Report',
            'Issue Detail Report',
            'Issue To Patient Detail Report',
            'Miscellaneous Consumption Report',
            'Application Error Log Report',
            'Item Wise Consumption Details',
            'Stock Ledger Report New',
            'Issue To Patient Report',
            'Issue To Patient Department Wise Report',
        ],
    },
};

  return (
    <div>
       <CommonMenuPage 
       menuConfig={menuConfig_Invantary}
       modules={["services", "setup", "reports"]} />
    </div>
  )
}


export default Homemenu_Inventory
