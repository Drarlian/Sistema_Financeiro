import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { InfosProvider } from './contexts/InfosContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InfosProvider>
      <App />
    </InfosProvider>
  </React.StrictMode>,
)
