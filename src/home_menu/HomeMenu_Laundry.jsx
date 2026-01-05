import React from 'react'
import Opentabs from '../components/layout/OpenTabs'
import Innerfooter from '../components/layout/InnerFooter'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_Laundry() {

const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
const menuConfig_Laundary = {
    services: {
        icon: service,
        title: "Services",
        items: [
            'Request Of Item',
            'Receipt Of Items',
            'Work Completion',
            'Work Order',
            'Delivery Form',
            'Acknowledgment Form',
        ],
    },

    setup: {
        icon: setup,
        title: "Setup",
        items: [
            'Group Master',
            'Laundry Service Rate Master',
            'Location Master',
            'Party Master',
            'Process Master',
            'Shift Master',
        ],
    },


};

  return (
    <div>
      <Opentabs></Opentabs>
       <CommonMenuPage 
       menuConfig={menuConfig_Laundary}
       modules={["services", "setup"]} />
      <Innerfooter></Innerfooter>
    </div>
  )
}


export default Homemenu_Laundry
