import Navbar from "../components/Navbar";
import DataCollectionPage from "../components/DataCollectionPage";
import DataPreprocessingPage from "../components/DataPreprocessingPage";
import KoverLearnPage from "../components/KoverLearnPage";
import AnalysisPage from "../components/AnalysisPage";
import SettingsPage from "../components/SettingsPage";
import { Navigate, Route, Routes } from "react-router-dom";
import AMRTab from "../components/AMRTab";
import GenomesTab from "../components/GenomesTab";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="collection" replace />} />
        <Route path="collection" element={<DataCollectionPage />}>
          <Route index path="*" element={<Navigate to="genomes" replace />} />
          <Route path="genomes" element={<GenomesTab />} />
          <Route path="amr" element={<AMRTab />} />
        </Route>
        <Route path="collection" element={<DataCollectionPage />} />
        <Route path="preprocessing" element={<DataPreprocessingPage />} />
        <Route path="kover" element={<KoverLearnPage />} />
        <Route path="analysis" element={<AnalysisPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}
