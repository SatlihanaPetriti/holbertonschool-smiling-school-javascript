import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import PricingPage from "./Pages/Pricing/index";
import Courses from "./Pages/Courses/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pricing" element={<PricingPage />} />
      <Route path="/Courses" element={<Courses />} />
    </Routes>
  </BrowserRouter>

);
