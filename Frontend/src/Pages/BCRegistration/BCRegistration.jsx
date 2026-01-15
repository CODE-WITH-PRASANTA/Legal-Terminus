import React from 'react'
import BCbreadcrum from '../../Components/BCbreadcrum/BCbreadcrum'
import BCplanandpricing from '../../Components/BCplanandpricing/BCplanandpricing'
import BCtermcondition from '../../Components/BCtermcondition/BCtermcondition'
import BCpremium from '../../Components/BCpremium/BCpremium'
import BCtabs from '../../Components/BCtabs/BCtabs'
import BCcompany from '../../Components/BCcompany/BCcompany'
import BCtypes from '../../Components/BCtypes/BCtypes'
import BCrequirment from '../../Components/BCrequirment/BCrequirment'
import BCprocess from '../../Components/BCprocess/BCprocess'


import BCdocuments from '../../Components/BCdocuments/BCdocuments'

import BCfaq from '../../Components/BCfaq/BCfaq'
import BCtestimonial from '../../Components/BCtestimonial/BCtestimonial'
import BCvideo from '../../Components/BCvideo/BCvideo'
import BCclients from '../../Components/BCclients/BCclients'


const PrivateLimited = () => {
  return (
    <div>
     <BCbreadcrum />

      <div id="plans">
      <BCplanandpricing />
      </div>

      <BCtermcondition />

      <div id="premium">
       <BCpremium />
      </div>

     <BCtabs />

      <div id="company">
       <BCcompany />
      </div>

      <div id="types">
        <BCtypes />
      </div>

      <div id="requirements">
        <BCrequirment />
      </div>

      <div id="process">
      <BCprocess />
      </div>

      <div id="documents">
        <BCdocuments />
      </div>

      <div id="faq">
      <BCfaq />
      </div>

      <BCtestimonial />
     <BCvideo />
      <BCclients />
    </div>
  );
};

export default PrivateLimited