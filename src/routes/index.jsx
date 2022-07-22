import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Catalog from "../pages/Catalog";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Live from "../pages/Live";
import MustWatch from "../pages/MustWatch";
import NotFound from "../pages/NotFound";
import Premium from "../pages/Premium";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import RecentRelease from "../pages/RecentRelease";
import TermOfServices from "../pages/TermOfServices";
import TopIMDB from "../pages/TopIMDB";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/term-of-services" element={<TermOfServices />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/live" element={<Live />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/top-imdb" element={<TopIMDB />} />
      <Route path="/recent-release" element={<RecentRelease />} />
      <Route path="/must-watch" element={<MustWatch />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesList;
