import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import ScrollTop from "./ScrollTop";
import Products from "./pages/Products";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
