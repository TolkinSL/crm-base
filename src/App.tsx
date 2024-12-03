import { useState } from 'react';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="light">
        <h1>CRM</h1>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </MantineProvider>
    </>
  );
}

export default App;
