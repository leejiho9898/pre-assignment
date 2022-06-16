import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import GNBPage from '../pages/GNBPage';
import LoginPage from '../pages/LoginPage';
import PreAssignmentGuide from '../pages/PreAssignmentGuide';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/a" element={<PreAssignmentGuide />} />
      <Route path="/gnb" element={<GNBPage />} />
    </Routes>
  );
}

export default Routing;
