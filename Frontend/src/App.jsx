import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Pages/ContactUs/ContactUs";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/us" element={<ContactUs/>} />
        <Route path="/blog/details" element={<BlogDetails/>} />

        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
