import { useState } from "react";
import Landing from "./pages/Landing"
import Sidebar from './components/dashboard/Sidebar/Sidebar';
import Dashboard from "./pages/Dashboard";

function App() {
    const[view, setView] = useState("landing");

    return view === "landing" ? (
        <Landing goToApp={() => setView("dashboard")}/>) : (<Dashboard goHome={() => setView("landing")}/>)
}

export default App;