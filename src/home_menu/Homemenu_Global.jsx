import React from 'react'
import Opentabs from '../components/layout/OpenTabs'
import Innerfooter from '../components/layout/innerFooter'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_Global() {

const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"

const menuConfig_Global = {

setup: {
        icon: setup,
        title: "Setup",
        items: [
            'Registration',
            'Billing',
            'A D T',
            'O P D',
            'Investigation',
            'Ipd',
            'Diet Kitchen',
            'Inventory',
        ],
    },

};

  return (
    <div>
      <Opentabs></Opentabs>
       <CommonMenuPage 
       menuConfig={menuConfig_Global}
       modules={[ "setup"]} />
      <Innerfooter></Innerfooter>
    </div>
  )
}


export default Homemenu_Global
