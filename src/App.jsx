import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Spotlight from './components/Spotlight';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="bg-black min-h-screen selection:bg-neon-cyan selection:text-black font-pretendard">
        <AnimatePresence mode='wait'>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            <Spotlight />
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>

            <footer className="py-8 text-center text-slate-800 text-sm relative z-10 border-t border-white/5 mt-auto">
              <p>© 2025 Eomjiwon. All Rights Reserved.</p>
            </footer>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
