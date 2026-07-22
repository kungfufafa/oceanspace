import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const About = lazy(() => import('./pages/About'));
const CareerApply = lazy(() => import('./pages/CareerApply'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const Distribusi = lazy(() => import('./pages/Distribusi'));
const Home = lazy(() => import('./pages/Home'));
const Lifestyle = lazy(() => import('./pages/Lifestyle'));
const Retail = lazy(() => import('./pages/Retail'));
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

function App() {
  return (
    <Router>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/career-apply" element={<CareerApply />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/distribusi" element={<Distribusi />} />
          <Route path="/" element={<Home />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/sub-retail" element={<SubRetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
