import React from 'react'
import Opentabs from '../components/layout/OpenTabs'
import Innerfooter from '../components/layout/InnerFooter'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_IPD() {
    
const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
const menuConfig_IPD = {
    services: {
        icon: service,
        title: "Services",
        items: [
            'I P D Doctor Desk',
            'I P D Desk',
            'Ipd Dr Desk Lite',
            'I P D Nursing Desk New',
        ],
    },

    setup: {
        icon: setup,
        title: "Setup",
        items: [
            'Intake Outtake Para Master',
            'Intake Outtake Route Master',
            'Method Master',
        ],
    },


};

  return (
    <div>
      <Opentabs></Opentabs>
       <CommonMenuPage 
       menuConfig={menuConfig_IPD}
       modules={["services", "setup"]} />
      <Innerfooter></Innerfooter>
    </div>
  )
}


export default Homemenu_IPD
