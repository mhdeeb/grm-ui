import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<MainContent />} />
        </Routes>
        </>
    );
}