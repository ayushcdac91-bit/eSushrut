import React from 'react'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_ADT() {

const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
    const menuConfig_ADT = {
        services: {
            icon: service,
            title: "Services",
            items: [
                'Single Window Admission Desk',
                'Patient Final Discharge',
                'Reprint',
                'Admission Cancellation',
                'Patient Tracking',
                'Discharge Cancellation',
                'Transfer , Cancellation & Acceptance',
                'Admission Modification',
            ],
        },

        setup: {
            icon: setup,
            title: "Setup",
            items: [
                'Bed Status Master',
                'Bed Type Master',
                'Death Cause Master',
                'Death Manner Master',
                'D.U.W.R. Bed Master',
                'In Patient Config Master',
                'Room Bed Master',
                'Room Config Master',
                'Room Type Master',
                'Ward Type Master',
                'Ward Master',
            ],
        },

        reports: {
            icon: report,
            title: "Reports",
            items: [
                'Admitted Patient Listing',
                'Category Wise Admission Listing',
                'Daily Discharge Report',
                'Admitted Patient Listing O',
                'Complete Ward Census Detail New',
                'Department Wise Admission And Discharge',
                'Cancelled / Not Reported Patient Listing New',
                'Sex Ratio Report',
                'Category Wise Admission Listing O',
                'Currently Admitted Patients',
                'I P D Statistical Report',
                'Patient Transfer Details',
            ],
        },
    };

    return (
        <div>
            <CommonMenuPage
                menuConfig={menuConfig_ADT}
                modules={["services", "setup", "reports"]} />
        </div>
    )
}


export default Homemenu_ADT