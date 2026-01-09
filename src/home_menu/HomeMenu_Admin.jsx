import React from 'react'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_Admin() {
const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
    
const menuConfig_Admin = {

    setup: {
        icon: setup,
        title: "Setup",
        items: [
            'User Creation By Supervisor',
        ],
    },

    reports: {
        icon: report,
        title: "Reports",
        items: [
            'Patient Admission Report',
            'Patient Discharge Report',
            'Patient Death Report',
            'I P D Statistical Report',
        ],
    },
};

  return (
    <div>
       <CommonMenuPage 
       menuConfig={menuConfig_Admin}
       modules={["setup", "reports"]} />
    </div>
  )
}


export default Homemenu_Admin
