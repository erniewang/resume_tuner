import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './componets/Header';
import { Home } from './pages/Home';
import { ResumeTweaks } from './pages/ResumeTweaks';
import { Settings } from './pages/Settings';

const App = () => {
    return (
        <Router>
            <div className="h-screen w-screen bg-gray-50 flex flex-col">
                <Header />
                <main className="w-full flex flex-1 flex-col">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume-tweaks" element={<ResumeTweaks />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);