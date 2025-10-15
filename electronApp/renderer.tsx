import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { Header } from './componets/Header';
import { Content } from './componets/Content';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div style={{ 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header 
        title="Electron React App" 
        onNavClick={handleNavClick} 
      />
      <Content activeSection={activeSection} />
    </div>
  );
}

// Mount React app to the DOM
const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}