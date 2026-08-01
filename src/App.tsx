import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { HowPage } from "./pages/HowPage";
import { SpecialistsPage } from "./pages/SpecialistsPage";
import { InstallPage } from "./pages/InstallPage";
import { ToolsPage } from "./pages/ToolsPage";
import { WhatsNewPage } from "./pages/WhatsNewPage";
import { SupportPage } from "./pages/SupportPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="how" element={<HowPage />} />
            <Route path="specialists" element={<SpecialistsPage />} />
            <Route path="whats-new" element={<WhatsNewPage />} />
            <Route path="install" element={<InstallPage />} />
            <Route path="tools" element={<ToolsPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}
