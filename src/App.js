import React from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>
          Context API Demo with Theme
        </h1>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <div>
              <p>
                Current Theme: <span className={`themeWord ${theme}`}>{theme}</span>
              </p>
              <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    </ThemeProvider>
  );
}

export default App;