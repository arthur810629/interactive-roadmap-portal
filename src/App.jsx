import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProfessionPage from './pages/ProfessionPage'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap/:id" element={<CategoryPage />} />
          <Route path="/profession/:id" element={<ProfessionPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}
