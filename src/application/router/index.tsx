import * as React from "react";
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import { DashboardPage } from "../../presentation/pages/Dashboard";
import { LandPage } from "../../presentation/pages/LandPage";
import { useAuth } from "../hook/useAuth";
import { LayoutContainer } from "../../presentation/shared/layount/Layout";

export const RoutesComponent = () => {
  const {getUser } = useAuth();
  const ProtectedRoute = ({ children }: any) => {
    if (getUser() == null) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<LayoutContainer isLogged={false} />}>
        <Route index element={<LandPage />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <LayoutContainer isLogged={true} />
          </ProtectedRoute>
        }
      >
        {/* all routes here will be protected */}
        <Route path="/private" element={<DashboardPage></DashboardPage>} />
      </Route>
    </Routes>
  );
};
