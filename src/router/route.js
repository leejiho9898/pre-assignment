import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import GNBHeader from '../component/base/GNBHeader';
import FeedPage from '../pages/FeedPage';
import LoginPage from '../pages/LoginPage';
import PreAssignmentGuide from '../pages/PreAssignmentGuide';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/assign" element={<PreAssignmentGuide />} />

      {/* 로그인후 */}
      <Route path="/" element={<GNBHeader />}>
        <Route path="feed" element={<FeedPage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
