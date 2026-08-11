import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { VercelAnalytics } from "./components/VercelAnalytics";
import { HomePage } from "./pages/HomePage";
import { HowPage } from "./pages/HowPage";
import { SpecialistsPage } from "./pages/SpecialistsPage";
import { InstallPage } from "./pages/InstallPage";
import { ToolsPage } from "./pages/ToolsPage";
import { WhatsNewPage } from "./pages/WhatsNewPage";
import { SupportPage } from "./pages/SupportPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ReleaseReadinessPage } from "./pages/ReleaseReadinessPage";
import { CaseFilePage } from "./pages/CaseFilePage";
import { EvalsPage } from "./pages/EvalsPage";
import { DesignPartnersPage } from "./pages/DesignPartnersPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="how" element={<HowPage />} />
          <Route path="how-it-works" element={<Navigate to="/how" replace />} />
          <Route path="specialists" element={<SpecialistsPage />} />
          <Route path="whats-new" element={<WhatsNewPage />} />
          <Route path="install" element={<InstallPage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="release-readiness" element={<ReleaseReadinessPage />} />
          <Route path="docs/case-file" element={<CaseFilePage />} />
          <Route path="evals" element={<EvalsPage />} />
          <Route path="design-partners" element={<DesignPartnersPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <VercelAnalytics />
    </BrowserRouter>
  );
}
