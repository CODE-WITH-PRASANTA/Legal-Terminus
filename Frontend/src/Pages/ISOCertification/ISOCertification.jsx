import React from 'react'
import ISObreadcrum from '../../Components/ISObreadcrum/ISObreadcrum'
import ISOplan from '../../Components/ISOplan/ISOplan'
import ISOtermandcondition from '../../Components/ISOtermandcondition/ISOtermandcondition'
import ISOpremium from '../../Components/ISOpremium/ISOpremium'
import ISOtabs from '../../Components/ISOtabs/ISOtabs'
import ISOcompany from '../../Components/ISOcompany/ISOcompany'
import ISOtypes from '../../Components/ISOtypes/ISOtypes'
import ISOrequirments from '../../Components/ISOrequirments/ISOrequirments'
import ISOprocess from '../../Components/ISOprocess/ISOprocess'
import ISOdocument from '../../Components/ISOdocument/ISOdocument'
import ISOfaq from '../../Components/ISOfaq/ISOfaq'
import ISOtestimonial from '../../Components/ISOtestimonial/ISOtestimonial'
import ISOvideo from '../../Components/ISOvideo/ISOvideo'
import ISOclients from '../../Components/ISOclients/ISOclients'

const PrivateLimited = () => {
  return (
    <div>
      <ISObreadcrum />

      <div id="plans">
       <ISOplan />
      </div>

     <ISOtermandcondition />


      <div id="premium">
        <ISOpremium />
      </div>

      <ISOtabs />

      <div id="company">
       <ISOcompany />
      </div>

      <div id="types">
      <ISOtypes />
      </div>

      <div id="requirements">
       <ISOrequirments />
      </div>

      <div id="process">
        {/* <ISOprocess /> */}
      </div>

      <div id="documents">
       {/* <ISOdocument /> */}
      </div>

      <div id="faq">
       <ISOfaq />
      </div>

     <ISOtestimonial />
     <ISOvideo/>
    <ISOclients />
    </div>
  );
};

export default PrivateLimited