import React from 'react'
import Opentabs from '../components/layout/OpenTabs'
import Innerfooter from '../components/layout/InnerFooter'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_OPD() {

const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
const menuConfig_OPD = {
    services: {
        icon: service,
        title: "Services",
        items: [
            'Opd Desk Lite',
            'E M R Desk',
            'O P D Bay Desk',
        ],
    },

    setup: {
        icon: setup,
        title: "Setup",
        items: [
            'Opd Template Master',
            'Desk Masters',
        ],
    },

    reports: {
        icon: report,
        title: "Reports",
        items: [
            'Opd Eprescription',
            'Chief Complaint Report',
        ],
    },
};

  return (
    <div>
      <Opentabs></Opentabs>
       <CommonMenuPage 
       menuConfig={menuConfig_OPD}
       modules={["services", "setup", "reports"]} />
      <Innerfooter></Innerfooter>
    </div>
  )
}


export default Homemenu_OPD