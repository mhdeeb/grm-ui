import Navbar from "../components/Navbar";
import DataCollectionPage from "../components/DataCollectionPage";
import DataPreprocessingPage from "../components/DataPreprocessingPage";
import KoverLearnPage from "../components/KoverLearnPage";
import AnalysisPage from "../components/AnalysisPage";
import SettingsPage from "../components/SettingsPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/collection" element={<DataCollectionPage />} />
            <Route path="/preprocessing" element={<DataPreprocessingPage />} />
            <Route path="/kover" element={<KoverLearnPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/settings" element={<SettingsPage />} />
        </Routes>
        </>
    );
}