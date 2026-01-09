import React from 'react'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_MRD() {

const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
const menuConfig_MRD = {
    services: {
        icon: service,
        title: "Services",
        items: [
            'Medical And Fitness Certificate',
        ],
    },

    reports: {
        icon: report,
        title: "Reports",
        items: [
            'Daily Death Report',
            'Admission Report',
            'Daily Discharge Report',
            'Daily Admission Report',
        ],
    },
};

  return (
    <div>
       <CommonMenuPage 
       menuConfig={menuConfig_MRD}
       modules={["services", "reports"]} />
    </div>
  )
}


export default Homemenu_MRD
