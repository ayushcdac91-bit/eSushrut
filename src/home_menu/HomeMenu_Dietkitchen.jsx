import React from 'react'
import CommonMenuPage from '../features/exampleFeature/components/CommonMenu'

function Homemenu_Dietkitchen() {

const setup ="images/Icons/Setup.png"
const report = "images/Icons/Reports.png"
const service = "images/Icons/Services.png"
    const menuConfig_Dietkitchen = {
        services: {
            icon: service,
            title: "Services",
            items: [
                'Patient Group Diet Request',
                'Diet Compilation',
                'Diet Request Acknowledge',
            ],
        },

        setup: {
            icon: setup,
            title: "Setup",
            items: [
                ' Department Member Mapping Master',
                'Diet Supplier Master',
                'Kitchen Master',
                'Kitchen Member Mapping Master',
                'Kitchen Trolley Location Mapping Master',
                'Meal Time Menu Mapping Master',
                'Meal Type Meal Time Mapping Master',
                'Meal Type Menu Mapping Master',
                'Menu Ingredient Mapping Master',
                'Menu Nutrient Mapping Master',
                'Trolley Master',
                'Ward Default Meal Type Master',
                'Feed Type Master',
                'Feed - Meal Type Mapping',
            ],
        },

        reports: {
            icon: report,
            title: "Reports",
            items: [
                '  Ward Wise Diet Request Report',
            ],
        },
    };

    return (
        <div>
            <CommonMenuPage
                menuConfig={menuConfig_Dietkitchen}
                modules={["services", "setup", "reports"]} />
        </div>
    )
}


export default Homemenu_Dietkitchen