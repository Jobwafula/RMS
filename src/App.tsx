// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import { MainLayout } from "./dashboard/components/layout/MainLayout";
import { Dashboard } from "./dashboard/pages/Dashboard";
import Properties from "./dashboard/pages/Properties";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/properties"
          element={
            <MainLayout>
              <Properties />
            </MainLayout>
          }
        />
        {/* <Route
          path="/tenants"
          element={
            <MainLayout>
              <Tenants />
            </MainLayout>
          }
        /> */}
        {/* <Route
          path="/leases"
          element={
            <MainLayout>
              <Leases />
            </MainLayout>
          }
        /> */}
        {/* <Route
          path="/payments"
          element={
            <MainLayout>
              <Payments />
            </MainLayout>
          }
        /> */}
        {/* <Route
          path="/communications"
          element={
            <MainLayout>
              <Communications />
            </MainLayout>
          }
        /> */}
      </Routes>
    </Router>
  );
}