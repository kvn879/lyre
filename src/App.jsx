import { useEffect, useState } from "react";
import Landing from "./pages/Landing"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
    const [view, setView] = useState(() => {
        const savedView = localStorage.getItem("lyre-app-view");
        return ["landing", "login", "dashboard"].includes(savedView) ? savedView : "landing";
    });

    useEffect(() => {
        localStorage.setItem("lyre-app-view", view);
    }, [view]);

    if (view === "login") {
        return <Login onLogin={() => setView("dashboard")} onBack={() => setView("landing")} />;
    }

    if (view === "dashboard") {
        return <Dashboard goHome={() => setView("landing")} />;
    }

    return <Landing goToLogin={() => setView("login")} />;
}

export default App;