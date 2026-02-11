import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PricingPage from "./PricingPage/PricingPage";
import CoursesPage from "./Courses/CoursesPage";
import Home from "./components/Pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Pricing" element={<PricingPage />} />
      <Route path="/Courses" element={<CoursesPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>

);
