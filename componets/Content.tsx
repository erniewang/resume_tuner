import React from 'react';

interface ContentProps {
  activeSection: string;
}

export const Content: React.FC<ContentProps> = ({ activeSection }) => {
  return (
    <main style={contentStyle}>
      {activeSection === 'home' ? (
        <div>
          <h2 style={headingStyle}>Welcome to the App!</h2>
          <p style={paragraphStyle}>
            This is a sample home section showing how components can be used in an Electron app.
            Try clicking the navigation buttons above to see different content.
          </p>
          <div style={cardContainerStyle}>
            <div style={cardStyle}>
              <h3>Feature 1</h3>
              <p>Sample feature description</p>
            </div>
            <div style={cardStyle}>
              <h3>Feature 2</h3>
              <p>Another feature description</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 style={headingStyle}>About This App</h2>
          <p style={paragraphStyle}>
            This is a basic Electron app with React components. It demonstrates:
          </p>
          <ul style={listStyle}>
            <li>Component composition</li>
            <li>State management</li>
            <li>Styled components</li>
            <li>TypeScript integration</li>
          </ul>
        </div>
      )}
    </main>
  );
};

const contentStyle = {
  padding: '2rem',
  backgroundColor: '#f5f6fa',
  minHeight: 'calc(100vh - 64px)', // Subtract header height
};

const headingStyle = {
  color: '#2c3e50',
  marginBottom: '1rem',
};

const paragraphStyle = {
  color: '#34495e',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
};

const cardContainerStyle = {
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  flex: 1,
};

const listStyle = {
  color: '#34495e',
  lineHeight: '1.6',
  paddingLeft: '1.5rem',
};
