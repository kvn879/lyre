import Nav from "./Navbar"
import Hero from "./Hero"
import Features from "./Features"
import Workflow from "./Workflow"
import Footer from "./Footer"
import CallToAction from "./CallToAction"

export default function Landing() {
    return(
        <div className="min-h-screen" style={{ background: "#0B0F19", color: "#F8FAFC"}}>
            <Nav/>
            <Hero/>
            <Features/>
            <Workflow/>
            <CallToAction/>
            <Footer/>
        </div>
    )
}
