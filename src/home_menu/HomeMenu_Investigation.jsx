import React from 'react'
import Opentabs from '../components/layout/OpenTabs'
import Innerfooter from '../components/layout/InnerFooter'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_Invt() {

const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
const menuConfig_Investigation = {
    services: {
        icon: service,
        title: "Services",
        items: [
            ' Online Requisition Raising',
            'Sample Collection',
            'Packinglist Generation',
            'Sample Acceptance',
            'Result Entry',
            'Result Validation',
            'Result Report Printing',
            'Patient Acceptance',
            'Labwise Requisition Form Reprint',
            'Machine Result Entry',
            'Result Revalidation New',
            'Test Availability',
            'Krsnaa Lab Report',
        ],
    },

    setup: {
        icon: setup,
        title: "Setup",
        items: [
            'Antibiotic Process Master',
            'Bookmark Master',
            'Collection Area - Sample/Patient',
            'Configurator',
            'Film Master',
            'Film Used Process',
            'Global Test Group',
            'Item Uses Detail Master',
            'Lab Collection Area',
            'Lab Consumable Master',
            'Lab Item Mapping Master',
            'Lab Number Configuration Master',
            'Lab-Wise Sample Number Configuration Master',
            'Local Lab Canned Master',
            'Local Lab Macro Master',
            'Local Lab Master',
            'Local Lab Test Group Info Master',
            'Local Lab Test Master',
            'Local Lab Test Sample Master',
            'Local Test Group Master',
            'Local Test Mandatory Master',
            'Local Test Ref Range Master',
            'Loinc',
            'Machine_Master',
            'Machine_Test_Parameter_Master',
            'Organic Antibiotic Process Master',
            'Organic Process Master',
            'Reason Master',
            'Sample Collection Area Wise Sample Number Format',
            'User Bookmarking Master',
            'User Wise Bookmark Master',
        ],
    },

    reports: {
        icon: report,
        title: "Reports",
        items: [
            'Investigation Tracking Report',
            'Investigation Listing Report',
            'Workload Report',
            'Lab Wise Technician Wise Test Workload Report',
            'Biochemistry Work Status Detail',
            'Counting Of Sample Collection',
            'Count Of Investigation Raised Ward Wise',
            'Investigation Listing Report O',
            'J E Lab Report',
            'Laboratory Sample Statistics Report',
            'Lab Register',
            'Lab Wise Investigation Requisition',
            'Lab Wise Status Of Test',
            'Lab Wise Test Wise Workload Report',
            'Lab Wise Total Investigation Done',
            'Listing Of Sample Collection',
            'Machine Repeat Test Dashboard',
            'Machine Worklist Report',
            'Machine Worklist Report New',
            'Online Investigation Bill Details',
            'Patient Diagnosis Report',
            'Patient Register For Ictc',
            'Patient Register Ictc',
            'Pid Register Dashboard',
            'Pid Statistical Report',
            'Poor And Staff Patients Test Count',
            'Requisition Listing Report',
        ],
    },
};

  return (
    <div>
      <Opentabs></Opentabs>
       <CommonMenuPage 
       menuConfig={menuConfig_Investigation}
       modules={["services", "setup", "reports"]} />
      <Innerfooter></Innerfooter>
    </div>
  )
}


export default Homemenu_Invt