import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import PrivateLimited from "./Pages/PrivateLimited/PrivateLimited";
import ContactUs from "./Pages/ContactUs/ContactUs";
import IncorptionPage from "./Pages/IncorptionPage/IncorptionPage";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import Blog from "./Pages/Blog/Blog";
import Publicltd from "./Pages/Publicltd/Publicltd";
import Trust from "./Pages/Trust/Trust";
import Society from "./Pages/Society/Society";
import Section8 from "./Pages/Section8/Section8";
import LLP from "./Pages/LLP/LLP";
import OPC from "./Pages/OPC/OPC";
import GSTRegistration from "./Pages/GSTRegistration/GSTRegistration";
import GSTReturn from "./Pages/GSTReturn/GSTReturn";
import EPFReg from "./Pages/EPFReg/EPFReg"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/us" element={<ContactUs />} />
        <Route path="/blog/details" element={<BlogDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/one-person-company" element={<OPC />} />


        {/*   ALL SubPages */}
        <Route path="/Public-Limited-Company-Registration-in-India" element={<Publicltd />} />
        <Route path="/private-limited-company-registration-in-india" element={<PrivateLimited />} />
        <Route path="/incorption-registration-in-india" element={<IncorptionPage />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/society" element={<Society />} />
        <Route path="/section-8" element={<Section8 />} />
        <Route path="/llp" element={<LLP />} />
        <Route path="/gst-registration" element={<GSTRegistration />} />
        <Route path="/gst-return-filing" element={<GSTReturn />} />
        <Route path="/epf" element={<EPFReg />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
