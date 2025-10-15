import React from 'react';

interface HeaderProps {
  title: string;
  onNavClick: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onNavClick }) => {
  return (
    <header className="header" style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{title}</h1>
      <nav>
        <button
          onClick={() => onNavClick('home')}
          style={buttonStyle}
        >
          Home
        </button>
        <button
          onClick={() => onNavClick('about')}
          style={buttonStyle}
        >
          About
        </button>
      </nav>
    </header>
  );
};

const buttonStyle = {
  backgroundColor: 'transparent',
  border: '1px solid white',
  color: 'white',
  padding: '0.5rem 1rem',
  margin: '0 0.5rem',
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: 'white',
    color: '#2c3e50'
  }
};
