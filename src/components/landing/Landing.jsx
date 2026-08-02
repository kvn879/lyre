import Nav from "./Navbar"
import Features from "./Features"
import Workflow from "./Workflow"

export default function Landing() {
    return(
        <div className="min-h-screen" style={{ background: "#0B0F19", color: "#F8FAFC"}}>
            <Nav/>
            <Features/>
            <Workflow/>
        </div>
    )
}
