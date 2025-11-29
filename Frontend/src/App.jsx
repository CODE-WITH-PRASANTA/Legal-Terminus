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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/us" element={<ContactUs />} />
        <Route path="/blog/details" element={<BlogDetails />} />
        <Route path="/blog" element={<Blog />} />





        {/*   ALL SubPages */}
        <Route path="/private-limited-company-registration-in-india" element={<PrivateLimited />} />
        <Route path="/incorption-registration-in-india" element={<IncorptionPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
