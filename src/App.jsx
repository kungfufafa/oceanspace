import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import PageSeo from './components/PageSeo.jsx';

const About = lazy(() => import('./pages/About'));
const CareerApply = lazy(() => import('./pages/CareerApply'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const Distribusi = lazy(() => import('./pages/Distribusi'));
const Home = lazy(() => import('./pages/Home'));
const Lifestyle = lazy(() => import('./pages/Lifestyle'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Retail = lazy(() => import('./pages/Retail'));
const Subprocessors = lazy(() => import('./pages/Subprocessors'));
const SubRetail = lazy(() => import('./pages/SubRetail'));

function RouteFallback() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[var(--os-surface)] text-[var(--os-copy)]"
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  );
}

/** Serve /about without trailing slash — strip slash for React Router. */
function StripTrailingSlash({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    if (pathname.length > 1 && pathname.endsWith('/')) {
      navigate(`${pathname.replace(/\/+$/, '')}${search}${hash}`, { replace: true });
    }
  }, [location, navigate]);

  return children;
}

function App() {
  return (
    <Router>
      <StripTrailingSlash>
        <PageSeo />
        <a
          href="#main-content"
          className="absolute left-[-10000px] top-4 z-[100] rounded-md bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white focus:left-4"
        >
          Langsung ke konten utama
        </a>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/career-apply" element={<CareerApply />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/distribusi" element={<Distribusi />} />
            <Route path="/" element={<Home />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/subprocessors" element={<Subprocessors />} />
            <Route path="/sub-retail" element={<SubRetail />} />
          </Routes>
        </Suspense>
      </StripTrailingSlash>
    </Router>
  );
}

export default App;
