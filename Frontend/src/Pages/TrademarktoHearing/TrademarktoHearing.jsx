import React from "react";

import TrademarktoHearingBreadcrum from "../../Components/TrademarktoHearingBreadcrum/TrademarktoHearingBreadcrum";
import TrademarktoHearingPlans from "../../Components/TrademarktoHearingPlans/TrademarktoHearingPlans";
import TrademarktoHearingTermCondition from "../../Components/TrademarktoHearingTermCondition/TrademarktoHearingTermCondition";
import TrademarktoHearingZolvitPremium from "../../Components/TrademarktoHearingZolvitPremium/TrademarktoHearingZolvitPremium";
import TrademarktoHearingTabs from "../../Components/TrademarktoHearingTabs/TrademarktoHearingTabs";
import TrademarktoHearingOverview from "../../Components/TrademarktoHearingOverview/TrademarktoHearingOverview";
import TrademarktoHearingFeatures from "../../Components/TrademarktoHearingFeatures/TrademarktoHearingFeatures";
import TrademarktoHearingBenefits from "../../Components/TrademarktoHearingBenefits/TrademarktoHearingBenefits";
import TrademarktoHearingElegibility from "../../Components/TrademarktoHearingElegibility/TrademarktoHearingElegibility";
import TrademarktoHearingDocuments from "../../Components/TrademarktoHearingDocuments/TrademarktoHearingDocuments";
import TrademarktoHearingFAQ from "../../Components/TrademarktoHearingFAQ/TrademarktoHearingFAQ";
import TrademarktoHearingProcess from "../../Components/TrademarktoHearingProcess/TrademarktoHearingProcess";
import TrademarktoHearingWhy from "../../Components/TrademarktoHearingWhy/TrademarktoHearingWhy";
import TrademarktoHearingOurClients from "../../Components/TrademarktoHearingOurClients/TrademarktoHearingOurClients";

const TradeLicense = () => {
  return (
    <div>
      <TrademarktoHearingBreadcrum />

      <div id="plans">
        <TrademarktoHearingPlans/>
      </div>

      <TrademarktoHearingTermCondition/>

      <div id="premium">
        <TrademarktoHearingZolvitPremium/>
      </div>

      <TrademarktoHearingTabs />

      <div id="company">
        <TrademarktoHearingOverview/>
      </div>

      <div id="types">
        <TrademarktoHearingFeatures />
      </div>

      <div id="requirements">
        <TrademarktoHearingBenefits/>
      </div>

      <div id="process">
        <TrademarktoHearingElegibility />
      </div>

     <div id="documents">
        <TrademarktoHearingDocuments/>
      </div>

      <div id="faq">
        <TrademarktoHearingFAQ />
      </div>

      <TrademarktoHearingProcess />
      <TrademarktoHearingWhy />
      <TrademarktoHearingOurClients />
    </div>
  );
};

export default TradeLicense;
