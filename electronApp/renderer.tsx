import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './componets/Header';
//pages
import { OptimizeUI } from './pages/optimizeArea';
import { ResumeWorkshop } from './pages/resumeCreator';
import { TunerSettings } from './pages/settings';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<OptimizeUI/>} />
        <Route path="/resume-tweaks" element={<ResumeWorkshop/>} />
        <Route path="/settings" element={<TunerSettings />} />
      </Routes>
    </HashRouter>
  );
}

// Mount React app to the DOM
const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}