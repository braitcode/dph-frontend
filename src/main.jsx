import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './components/contexts/Auth.jsx'
import './index.css'
import { AuthProvider } from './components/contexts/Auth.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
<<<<<<< HEAD
    <App />
    </AuthProvider>
=======
      <App />
    </AuthProvider>
  
>>>>>>> 2cd83844085aeeafc20d2d256b873e4e4c67f0c4
  </React.StrictMode>,
)
