import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { NotAllowedPage } from "../../presentation/pages/NotAllowedPage";
import { NotFoundPage } from "../../presentation/pages/NotFoundPage";
import { PublicLayoutContainer } from "../../presentation/shared/layount/PublicLayout";
import { LoggedLayoutContainer } from "../../presentation/shared/layount/LoggedLayout";
import { HomePage } from "../../presentation/pages/Home";
import { LandPage } from "../../presentation/pages/LandPage";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayoutContainer></PublicLayoutContainer>}>
        <Route index element={<LandPage />} />

        <Route
          path="/not-allowed"
          element={<NotAllowedPage></NotAllowedPage>}
        />
        <Route path="/*" element={<NotFoundPage></NotFoundPage>} />
      </Route>
      <Route path="/admin" element={<LoggedLayoutContainer></LoggedLayoutContainer>}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
