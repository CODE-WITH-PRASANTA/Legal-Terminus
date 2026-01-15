import React from 'react';
import IECBreadcrum from '../../Components/IECBreadcrum/IECBreadcrum';
import IECPlans from '../../Components/IECPlans/IECPlans';
import IECTermCondition from '../../Components/IECTermCondition/IECTermCondition';
import IECZolvitpremium from '../../Components/IECZolvitePremium/IECZolvitPremium';
import IECTabs from '../../Components/IECTabs/IECTabs';
import IECOverview from '../../Components/IECOverview/IECOverview';
import IECFeatures from '../../Components/IECFeatures/IECFeatures';
import IECBenefits from '../../Components/IECBenefits/IECBenefits';
import IECElegibility from '../../Components/IECElegibility/IECElegibility';
import IECDocuments from '../../Components/IECDocuments/IECDocuments';
import IECFAQ from '../../Components/IECFAQ/IECFAQ';
import IECProcess from '../../Components/IECProcess/IECProcess';
import IECWhy from '../../Components/IECWhy/IECWhy';
import IECOurclints from '../../Components/IECOurclints/IECOurclints';

const IEC = () => {
  return (
    <div>
      <IECBreadcrum />
      <div id="plans">
        <IECPlans />
      </div>
      <IECTermCondition />
      <div id="premium">
        <IECZolvitpremium />
      </div>
      <IECTabs />
      <div id="company">
        <IECOverview />
      </div>
      <div id="types">
        <IECFeatures />
      </div>
      <div id="requirements">
        <IECBenefits />
      </div>
      <div id="process">
        <IECElegibility />
      </div>
      <div id="documents">
        <IECDocuments />
      </div>
    <div id="faq">
        <IECFAQ />
      </div>

      <IECProcess />
      <IECWhy />
      <IECOurclints />
    </div>
  );
};

export default IEC;
