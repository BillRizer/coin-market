import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { NotAllowedPage } from "../../presentation/pages/NotAllowedPage";
import { NotFoundPage } from "../../presentation/pages/NotFoundPage";
import { LayoutContainer } from "../../presentation/shared/containers/Layout";
import { HomePage } from "../../presentation/pages/Home";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer></LayoutContainer>}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<>about</>} />
        <Route path="/dashboard" element={<>dashboard</>} />

        <Route
          path="/not-allowed"
          element={<NotAllowedPage></NotAllowedPage>}
        />
        <Route path="/*" element={<NotFoundPage></NotFoundPage>} />
      </Route>
      <Route path="/admin" >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
