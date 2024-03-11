// src/App.js
import React from 'react';
import './App.css';
import ThemeSwitch from './ThemeSwitch';
import { useTheme } from './ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <header className={`App-header ${theme}`}>
        <p>
          Theme is currently set to {theme} mode.
        </p>
        <ThemeSwitch />
      </header>
    </div>
  );
}

export default App;
