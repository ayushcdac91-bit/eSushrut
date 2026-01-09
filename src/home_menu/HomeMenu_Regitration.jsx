import React from 'react'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_Reg() {

const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"

const menuConfig_Reg = {
  services: {
    icon: service,
    title: "Services",
    items: [
      "Patient Registration",
      "Patient Detail Modification",
      "Patient Revisit",
      "Change Patient Category",
      "Duplicate Card Print",
      "Patient Referral",
      "Patient Abha Profile Share Window",
      "Linkage Of ABHA Number With Hospital CR No",
      "Quick Patient Detail Modification",
      "Special Clinic Registration",
      "Special Clinic Revisit",
      "Registration Cancellation",
      "Special Registration With Appointment",
      "Special Registration With Appointment New",
      "Special Clinic Visit With Appointment",
      "CR Merge",
      "Patient Consent For Health Records",
    ],
  },

  setup: {
    icon: setup,
    title: "Setup",
    items: [
      "Location",
      "Local Department Master",
      "Unit",
      "Unit Consultant",
      "Room",
      "Department Unit Room",
      "Shift",
      "Roster",
      "Local Patient Category",
      "Renewal Configuration",
      "Employee Master",
      "Category Wise Verification Document",
      "External Institute",
      "ABHA Counter Master",
    ],
  },

  reports: {
    icon: report,
    title: "Reports",
    items: [
      "Patient Listing Report",
      "Unit Wise OPD Statistics",
      "Dept Wise OPD Statistics",
      "OPD Statistics Dashboard",
      "Hospital Dashboard",
      "Age Wise Patient Statistics",
      "Userwise Patient Listing Report",
      "OPD And Abha Scan & Share Report",
    ],
  },
};

  return (
    <div>
       <CommonMenuPage 
       menuConfig={menuConfig_Reg}
       modules={["services", "setup", "reports"]} />
    </div>
  )
}


export default Homemenu_Reg
