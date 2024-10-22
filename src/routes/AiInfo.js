import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 에이아이 페이지 S */
const AiInfoPage = loadable(() => import('../aiinfo/pages/AiInfo'));

/* 에이아이 관련 페이지 E */

const AiInfo = () => {
  return (
    <Routes>
      <Route path="/aiinfo" element={<MainLayout />}>
        <Route index element={<AiInfoPage />} />
        {/* <Route path="aiinfo" element={<AiInfoPage />} /> */}
      </Route>
    </Routes>
  );
};

export default React.memo(AiInfo);
