import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import OPC from "./Pages/OPC/OPC";
import Publicltd from "./Pages/Publicltd/Publicltd";
import PrivateLimited from "./Pages/PrivateLimited/PrivateLimited";
import IncorptionPage from "./Pages/IncorptionPage/IncorptionPage";
import Trust from "./Pages/Trust/Trust";
import Society from "./Pages/Society/Society";
import Section8 from "./Pages/Section8/Section8";
import LLP from "./Pages/LLP/LLP";
import GSTRegistration from "./Pages/GSTRegistration/GSTRegistration";
import GSTReturn from "./Pages/GSTReturn/GSTReturn";
import EPFReg from "./Pages/EPFReg/EPFReg";
import UdyamReg from './Pages/UdyamReg/UdyamReg';
import ESICReg from './Pages/ESICReg/ESICReg';
import ProfessionalReg from './Pages/ProfessionalReg/ProfessionalReg';
import ShopReg from './Pages/ShopReg/ShopReg';
import Proprietorship from './Pages/Proprietorship/Proprietorship';
import Parternership from "./Pages/Parternership/Parternership";
import PartnershiptoPrivate from "./Pages/PartnershiptoPrivate/PartnershiptoPrivate";
import LlptoPrivate from "./Pages/LlptoPrivate/LlptoPrivate";
import PritoLlp from "./Pages/PritoLlp/PritoLlp";
import IEC from "./Pages/IEC/IEC";
import FoodLicense from "./Pages/FoodLicense/FoodLicense";
import TradeLicense from "./Pages/TradeLicense/TradeLicense";


import RouteLoaderWrapper from "./Components/PageLoader/RouteLoaderWrapper";
import FloatIcon from "./Components/FloatIcon/FloatIcon";
import ProprietorshipOPC from "./Pages/ProprietorshipOPC/ProprietorshipOPC";
import PropritorshipPLC from "./Pages/ProprietorshipPLC/ProprietorshipPLC";
import PartnershipLLP from "./Pages/PartnershipLLP/PartnershipLLP"

import LLRegistration from "./Pages/LLRegistration/LLRegistration";
import BCRegistration from "./Pages/BCRegistration/BCRegistration";
import ISOCertification from "./Pages/ISOCertification/ISOCertification";

import TMRenewal from "./Pages/TMRenewal/TMRenewal";

function App() {
  return (
    <Router>
      <Navbar />

      <RouteLoaderWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/details" element={<BlogDetails />} />
          <Route path="/one-person-company" element={<OPC />} />
        

          {/* Sub Pages */}
          <Route
            path="/public-limited-company-registration-in-india"
            element={<Publicltd />}
          />
          <Route
            path="/private-limited-company-registration-in-india"
            element={<PrivateLimited />}
          />
          <Route
            path="/incorption-registration-in-india"
            element={<IncorptionPage />}
          />
          <Route path="/trust" element={<Trust />} />
          <Route path="/society" element={<Society />} />
          <Route path="/section-8" element={<Section8 />} />
          <Route path="/llp" element={<LLP />} />
          <Route path="/gst-registration" element={<GSTRegistration />} />
          <Route path="/gst-return-filing" element={<GSTReturn />} />
          <Route path="/epf" element={<EPFReg />} />
          <Route path="/udyam" element={<UdyamReg />} />
          <Route path="/esic" element={<ESICReg />}/>
          <Route path="/professional-tax" element={<ProfessionalReg />}/>
          <Route path="/shop-establishment" element={<ShopReg />}/>
          <Route path="/proprietorship" element={<Proprietorship/>}/>
          <Route path="/iec" element={<IEC/>}/>
          <Route path="/food-license" element={<FoodLicense/>}/>
          <Route path="/trade-license" element={<TradeLicense/>}/>
          
        
          <Route path="/partnership" element={<Parternership/>} />
          <Route path="/conversion/partnership-to-private" element={<PartnershiptoPrivate/>}/>
          <Route path="/conversion/llp-to-private" element={<LlptoPrivate/>}/>
          <Route path="/conversion/private-to-llp" element={<PritoLlp/>}/>
          <Route path="/labour-license" element={<LLRegistration/>} /> 
          <Route path="/bar-code" element={<BCRegistration/>} />
          <Route path="/iso" element={<ISOCertification />} />
          
          <Route path="/conversion/proprietorship-to-opc" element={<ProprietorshipOPC/>}/>
          <Route path="/conversion/proprietorship-to-private" element={<PropritorshipPLC/>}/>
          <Route path="/conversion/partnership-to-llp" element={<PartnershipLLP/>}/>

          <Route path="/trademark/renewal"element={<TMRenewal/>}/>
        </Routes>
      </RouteLoaderWrapper>

      {/* Floating Icon – Always Visible */}
      <FloatIcon />

      <Footer />
    </Router>
  );
}

export default App;
