import Navbar from "../components/landing/Navbar"
import Hero from "../components/landing/Hero"
import Features from "../components/landing/Features"
import Workflow from "../components/landing/Workflow"
import Footer from "../components/landing/Footer"
import CallToAction from "../components/landing/CallToAction"
import SidebarNav from "../components/dashboard/Sidebar/SidebarNav"

export default function Landing({ goToApp }) {
    return(
        <div className="min-h-screen" style={{ background: "#0B0F19", color: "#F8FAFC"}}>
            <Navbar goToApp={goToApp}/>
            <Hero goToApp={goToApp}/>
            <Features/>
            <Workflow/>
            <CallToAction goToApp={goToApp}/>
            <Footer/>
        </div>
    )
}
