import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); // 메인페이지

// 회원 페이지
const Member = loadable(() => import('./routes/Member'));

const routeUrlPaths = [
  'member',
];

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];

  // 회원 페이지일 경우 Member 컴포넌트 렌더링
  if (routeUrlPaths.includes(currentPath)) {
    return <Member />;
  }

  // 그 외의 경우 메인 레이아웃과 함께 페이지 렌더링
  return (
    <Routes>
      <Route path="/" element={<MaiinLayout />}>
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};



export default App;
