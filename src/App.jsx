
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes_HP from "./pages/Himachal_Pradesh/Routes_Himachal";
import Routes_Mah from "./pages/Maharashtra/Routes_Maharashtra";
import STATE, { isMah, isHP } from "./stateConfig";
import Homemenu_Reg from "./home_menu/HomeMenu_Regitration";
import Homemenu_Emy from "./home_menu/HomeMenu_Emergency";
import Homemenu_OPD from "./home_menu/HomeMenu_OPD";
import Homemenu_ADT from "./home_menu/HomeMenu_ADT";
import Homemenu_Invt from "./home_menu/HomeMenu_Investigation";
import Homemenu_Bill from "./home_menu/HomeMenu_Billing";
import Homemenu_Enquiry from "./home_menu/HomeMenu_Enquiry";
import Homemenu_Admin from "./home_menu/HomeMenu_Admin";
import Homemenu_OT from "./home_menu/homemenu_OT";
import Homemenu_IPD from "./home_menu/HomeMenu_IPD";
import Homemenu_Laundry from "./home_menu/HomeMenu_Laundry";
import Homemenu_Inventory from "./home_menu/HomeMenu_Inventory";
import Homemenu_MRD from "./home_menu/HomeMenu_MRD";
import Homemenu_Dietkitchen from "./home_menu/HomeMenu_Dietkitchen";
import Homemenu_Global from "./home_menu/Homemenu_Global";
import ChangePassword_Settings from "./settings/Change_Password";
import Common_Layout from "./components/layout/CommonLayout";


function App() {
  return (
    <>
    <BrowserRouter>
      {isMah && <Routes_Mah />}
      {isHP && <Routes_HP />}
      <Routes>
        <Route element={<Common_Layout />}>
        <Route path="/Home_Reg" element={<Homemenu_Reg/>} />
        <Route path="/Home_Emy" element={<Homemenu_Emy/>} />
        <Route path="/Home_OPD" element={<Homemenu_OPD/>} />
        <Route path="/Home_ADT" element={<Homemenu_ADT/>} />
        <Route path="/Home_Invt" element={<Homemenu_Invt/>} />
        <Route path="/Home_Bill" element={<Homemenu_Bill/>} />
        <Route path="/Home_Enquiry" element={<Homemenu_Enquiry/>} />
        <Route path="/Home_Admin" element={<Homemenu_Admin/>} />
        <Route path="/Home_OT" element={<Homemenu_OT/>} />
        <Route path="/Home_IPD" element={<Homemenu_IPD/>} />
        <Route path="/Home_Laundry" element={<Homemenu_Laundry/>} />
        <Route path="/Home_Inventory" element={<Homemenu_Inventory/>} />
        <Route path="/Home_MRD" element={<Homemenu_MRD/>} />
        <Route path="/Home_DietKitchen" element={<Homemenu_Dietkitchen/>} />
        <Route path="/Home_Global" element={<Homemenu_Global/>} />
        <Route path="/change-password" element={<ChangePassword_Settings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
     <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;

