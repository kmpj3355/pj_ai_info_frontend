import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import loadable from '@loadable/component';
import 'bootstrap/dist/css/bootstrap.min.css'; // 반응형웹
import { useMediaQuery } from 'react-responsive';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));

const Main = loadable(() => import('./main/pages/Main')); // 메인페이지

// 회원 페이지
const Member = loadable(() => import('./routes/Member'));

//에이아이 인포 페이지
const AiInfo = loadable(() => import('./routes/AiInfo'));


const routeUrlPaths = ['member', 'aiinfo'];
const AppContent = () => {
  const location = useLocation();
  return routeUrlPaths.includes(location.pathname.split('/')[1]) ? (
    <>
      <Member />
      <AiInfo />
    </>
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};

const App = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          {/* 반응형 크기 설정된 col-12, col-md-6 적용 */}
          <div className={`col-12 ${isDesktop ? '' : 'col-md-6'}`}>
            <AppContent />
            <div>
              {isDesktop }
              {isMobile }
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
