import React from 'react'
import PRFbreadcrum from '../../Components/PFRbreadcrum/PFRbreadcrum'
import PRFlandpricing from '../../Components/PRFlandpricing/PRFlandpricing' 
import PFRtermscondition from '../../Components/PFRtermscondition/PFRtermscondition'
import PFRpremium from '../../Components/PFRpremium/PFRpremium'
import PFRtabs from '../../Components/PFRtabs/PFRtabs'
import PFRcompanytab from '../../Components/PFRcompanytab/PFRcompanytab'
import PFRtypes from '../../Components/PFRtypes/PFRtypes'
import PFRrequirmentTabs from '../../Components/PFRrequirmentTabs/PFRrequirmentTabs'
import PFRprocess from '../../Components/PFRprocess/PFRprocess'
import PFRdocument from '../../Components/PFRdocument/PFRdocument'
import PFRfaq from '../../Components/PFRfaq/PFRfaq'
import PFRtestimonial from '../../Components/PFRtestimonial/PFRtestimonial'
import PFRvideo from '../../Components/PFRvideo/PFRvideo'
import PFRclients from '../../Components/PFRclients/PFRclients'


const PrivateLimited = () => {
  return (
    <div>
      <PRFbreadcrum />

      <div id="plans">
        <PRFlandpricing />
      </div>

      <PFRtermscondition />


      <div id="premium">
       <PFRpremium />
      </div>

     <PFRtabs />

      <div id="company">
       <PFRcompanytab />
      </div>

      <div id="types">
      <PFRtypes />
      </div>

      <div id="requirements">
        <PFRrequirmentTabs />
      </div>

      <div id="process">
      <PFRprocess />
      </div>

      <div id="documents">
       <PFRdocument />
      </div>

      <div id="faq">
       <PFRfaq />
      </div>

      <PFRtestimonial />
      <PFRvideo />
      <PFRclients />

      
    </div>
  );
};

export default PrivateLimited