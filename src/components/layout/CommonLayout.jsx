import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Opentabs from "./OpenTabs";
import Innerfooter from "./InnerFooter";

function Common_Layout() {
      const [refreshKey, setRefreshKey] = useState(0);
  return (
    <>
      <Opentabs setRefreshKey={setRefreshKey} />

       {/* Here are all pages with their respective components */}
      <Outlet key={refreshKey}/>
       {/* ------------------------------------------ */}
      <Innerfooter />
    </>
  );
}

export default Common_Layout;
