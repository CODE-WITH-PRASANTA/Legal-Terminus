import React from 'react'
import LLRbreadcrum from '../../Components/LLRbreadcrum/LLRbreadcrum'
import LLRlandpricing from '../../Components/LLRlandpricing/LLRlandpricing'
import LLRtermcondition from '../../Components/LLRtermcondition/LLRtermcondition'
import LLRpremium from '../../Components/LLRpremium/LLRpremium'
import LLRtabs from '../../Components/LLRtabs/LLRtabs'
import LLRcompanytab from '../../Components/LLRcompanytab/LLRcompanytab'
import LLRtypes from '../../Components/LLRtypes/LLRtypes'
import LLRrequirments from '../../Components/LLRrequirments/LLRrequirments'
import LLRprocess from '../../Components/LLRprocess/LLRprocess'

import LLRdocument from '../../Components/LLRdocument/LLRdocument'

import LLRfaq from '../../Components/LLRfaq/LLRfaq'
import LLRtestimonial from '../../Components/LLRtestimonial/LLRtestimonial'
import LLRvideotestimonial from '../../Components/LLRvideotestimonial/LLRvideotestimonial'
import LLRclients from '../../Components/LLRclients/LLRclients'

const PrivateLimited = () => {
  return (
    <div>
     <LLRbreadcrum />

      <div id="plans">
        <LLRlandpricing />
      </div>

      <LLRtermcondition />


      <div id="premium">
       <LLRpremium />
      </div>

      <LLRtabs />

      <div id="company">
       <LLRcompanytab/>
      </div>

      <div id="types">
        <LLRtypes />
      </div>

      <div id="requirements">
        <LLRrequirments />
      </div>

      <div id="process">
        <LLRprocess />
      </div>

      <div id="documents">
        <LLRdocument />
      </div>

      <div id="faq">
       <LLRfaq />
      </div>

      <LLRtestimonial />
     <LLRvideotestimonial />
     <LLRclients />
    </div>
  );
};

export default PrivateLimited