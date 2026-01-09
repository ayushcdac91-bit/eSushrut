import React from 'react'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_Enquiry() {
 
const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
const menuConfig_Enquiry = {
    services: {
        icon: service,
        title: "Services",
        items: [
            'Bed Status Dashboard',
            'O P D Statistics',
            'Dda Dashboard',
            'Director Dashboard New',
            'Adt Dashboard',
            'Billing Dashboard',
            'Abha Id Generation Details',
            'Investigation Dashboard',
            'Laboratory Statistics',
            'Laboratory Status Dashboard',
            'Enquiry Desk',
            'Pending List Of Discharge Patient',
        ],
    },

    setup: {
        icon: setup,
        title: "Setup",
        items: [
            'Dashboard Configuration Master',
            'Dashboard Enquiry Configuration',
            'Facility Master',
            'Feedback Setup',
            'Dashboard Setup',
        ],
    },

};

  return (
    <div>
       <CommonMenuPage 
       menuConfig={menuConfig_Enquiry}
       modules={["services", "setup"]} />
    </div>
  )
}


export default Homemenu_Enquiry
