import React from 'react'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_Emy() {
 
const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
const menuConfig_Emy = {
    services: {
        icon: service,
        title: "Services",
        items: [
            'Emergency Registration',
            'Emg Patient Modification',
            'Emergency Patient Revisit',
            'M L C Detail',
            'M L C To Non M L C Conversion',
            'Unknown To Known Conversion',
            'Patient Death Detail',
        ],
    },

    setup: {
        icon: setup,
        title: "Setup",
        items: [
            'Death Master',
            'M L C Case Type Master',
            'Patient Status',
            'Police Station Master',
        ],
    },

    reports: {
        icon: report,
        title: "Reports",
        items: [
            'Brought Dead Patient List',
            'M L C Patient List',
            'Unknown Patient List',
        ],
    },
};

  return (
    <div>
       <CommonMenuPage 
       menuConfig={menuConfig_Emy}
       modules={["services", "setup", "reports"]} />
    </div>
  )
}


export default Homemenu_Emy
