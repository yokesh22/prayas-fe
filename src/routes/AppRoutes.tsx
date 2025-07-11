import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../screens/Home";
import { AboutUs } from "./AboutUs/screens/AboutUs";
import { ExhibitorsPage } from "./ExhibitorsPage/screens/ExhibitorsPage";
import { PrivacyPolicy } from "./PrivacyPolicy/screens/PrivacyPolicy";
import { Registration } from "./Registration/screens/Registration";
import { TermsConditions } from "./TermsConditions/screens/TermsConditions";

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/exhibitors" element={<ExhibitorsPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};
