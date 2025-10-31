import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./componets/Header";
import { Home } from "./pages/Home";
import { ResumeTweaks } from "./pages/ResumeTweaks";
import { Settings } from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 flex h-screen w-screen flex-col items-center">
        <Header />
        <main className="flex w-full flex-1 flex-col items-center overflow-hidden">
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

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
