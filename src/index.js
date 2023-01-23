import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./Containers/homePage/homePage";
import About from "./Containers/AboutPage/aboutPage";
import Products from "./Containers/Products/products";
import ContactUs from "./Containers/ContactUs/contactUs";
import InvestorRelations from "./Containers/InvestorRelations/investorRelations";
import Career from "./Containers/ContactUs/Career/career";
import Footer from "./Components/Footer/footer";

import JobPost from "./Containers/ContactUs/Career/JobPost/jobPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="investorRelations" element={<InvestorRelations />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="ContactUs/Careers" element={<Career />} />
        <Route path="ContactUs/Careers/JobPost" element={<JobPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
