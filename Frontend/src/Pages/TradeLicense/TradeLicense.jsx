import React from "react";

import TradeLicenseBreadcrum from "../../Components/TradeLicenseBreadcrum/TradeLicenseBreadcrum";
import TradeLicensePlans from "../../Components/TradeLicensePlans/TradeLicensePlans";
import TradeLicenseTermCondition from "../../Components/TradeLicenseTermCondition/TradeLicenseTermCondition";
import TradeLicenseZolvitPremium from "../../Components/TradeLicenseZolvitPremium/TradeLicenseZolvitPremium";
import TradeLicenseTabs from "../../Components/TradeLicenseTabs/TradeLicenseTabs";
import TradeLicenseOverview from "../../Components/TradeLicenseOverview/TradeLicenseOverview";
import TradeLicenseFeatures from "../../Components/TradeLicenseFeatures/TradeLicenseFeatures";
import TradeLicenseBenefits from "../../Components/TradeLicenseBenefits/TradeLicenseBenefits";
import TradeLicenseElegibility from "../../Components/TradeLicenseElegibility/TradeLicenseElegibility";
import TradeLicenseDocuments from "../../Components/TradeLicenseDocuments/TradeLicenseDocuments";
import TradeLicenseFAQ from "../../Components/TradeLicenseFAQ/TradeLicenseFAQ";
import TradeLicenseProcess from "../../Components/TradeLicenseProcess/TradeLicenseProcess";
import TradeLicenseWhy from "../../Components/TradeLicenseWhy/TradeLicenseWhy";
import TradeLicenseOurClients from "../../Components/TradeLicenseOurClients/TradeLicenseOurClients";

const TradeLicense = () => {
  return (
    <div>
      <TradeLicenseBreadcrum />

      <div id="plans">
        {/* <TradeLicensePlans /> */}
      </div>

      {/* <TradeLicenseTermCondition /> */}

      <div id="premium">
        <TradeLicenseZolvitPremium />
      </div>

      <TradeLicenseTabs />

      <div id="company">
        <TradeLicenseOverview />
      </div>

      <div id="types">
        <TradeLicenseFeatures />
      </div>

      <div id="requirements">
        <TradeLicenseBenefits />
      </div>

      <div id="process">
        {/* <TradeLicenseElegibility /> */}
      </div>

     <div id="documents">
        {/* <TradeLicenseDocuments /> */}
      </div>

      <div id="faq">
        <TradeLicenseFAQ />
      </div>

      <TradeLicenseProcess />
      <TradeLicenseWhy />
      <TradeLicenseOurClients />
    </div>
  );
};

export default TradeLicense;
