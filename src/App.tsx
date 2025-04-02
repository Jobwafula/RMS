import React from 'react'
import { Dashboard } from './dashboard/pages/Dashboard'
import { MainLayout } from './dashboard/components/layout/MainLayout'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Router >
      <MainLayout>
      <Dashboard />
      </MainLayout>
      </Router>
    </>
  )
}

export default App
