import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import PrivateLimited from "./Pages/PrivateLimited/PrivateLimited";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}


        {/*   ALL SubPages */}
        <Route path="/private-limited" element={<PrivateLimited />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
