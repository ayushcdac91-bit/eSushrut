import React from 'react'
import Opentabs from '../components/layout/OpenTabs'
import Innerfooter from '../components/layout/InnerFooter'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_OT() {


const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
const menuConfig_OT = {
    services: {
        icon: service,
        title: "Services",
        items: [
            'P. A. C Requisition',
            'P. A. C Finalization',
            'O.T Advice',
            'Patient Acceptance',
            'Minor Ot Requisition',
            'Operation Record Entry',
            'Anesthesia Record Entry',
            'Operation Cancellation Rescheduling',
            'Pac Requisition',
            'Ot List Raising',
            'Ot List Validation',
        ],
    },

    setup: {
        icon: setup,
        title: "Setup",
        items: [
            'Anesthesia Type Master',
            'Department Member Master',
            'Department Template Controller Master',
            'Department Transaction Menu Master',
            'Operation Master',
            'Operation Type Master',
            'Operation Theater Master',
            'Department Operation Master',
            'Member Type Master',
            'Theater Table Master',
            'Site Master',
            'Template Designer Master',
        ],
    },

    reports: {
        icon: report,
        title: "Reports",
        items: [
            'Count Of Cancelled Operations',
            'Count Of Pac Performed',
            'Count Of Pac Requisition',
            'Details Of Operation Raised (Dept. Wise)',
            'Final Summary Report',
            'Gender Wise Operation Count Report',
            'Intake-Outtake Summary',
            'List Of Operation Cancellation Details',
            'List Of Ot Validated Patient Report',
            'List Of Pac Performed (Department Wise)',
            'List Of Pac Requisition (Department Wise)',
            'List Of Patient Pac Performed And Raised',
            'Operation Cancelled Report',
            'Operation Record',
            'Ot Listing',
            'Preoperative Assessment/Preoperative Findings',
            'Pre Operative Diagnosis',
            'Printing Of Ot Notes',
            'Statistical Report Of Operation Performed',
            'Statistical Report Of O T Performed',
        ],
    },
};

  return (
    <div>
      <Opentabs></Opentabs>
       <CommonMenuPage 
       menuConfig={menuConfig_OT}
       modules={["services", "setup", "reports"]} />
      <Innerfooter></Innerfooter>
    </div>
  )
}


export default Homemenu_OT
