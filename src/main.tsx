import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './App.tsx'
import FullCatalog from './components/fullCatalog/fullCatalog.tsx'

import { Provider } from 'react-redux'
import { storeCards } from './store/store.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={storeCards}>
      <Router basename='/KixStore'>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/FullCatalog' element={<FullCatalog />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)
