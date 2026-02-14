import React from "react";
import MydashbordFirst from "../components/MydashbordFirst";
import MydashbordSec from "../components/MydashbordSec";
import MydashbordThr from "../components/MydashbordThr";
import MydashbordFour from "../components/MydashbordFour";

const MyDashbord: React.FC = () => {
  return (
    <div>
      <h1>My Dashboard</h1>
      <MydashbordFirst/>
      <MydashbordSec/>
      <MydashbordThr/>
      <MydashbordFour/>
    </div>
  );
};

export default MyDashbord;
