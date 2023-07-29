import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
if (import.meta.env.MODE === 'development') {
  // When development, setup the MSW.
  // import the worker (under the browser.ts file)
  import('./mocks/browser.ts')
    .then(({ worker }) => {
      // Start the worker.
      worker.start();
    })
    .then(() => {
      // Render the application.
      root.render(
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      );
    });
} else {
  // Render the application in production without the MSW.
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
