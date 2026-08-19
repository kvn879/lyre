import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Bandcards from "../components/dashboard/Bandcards";
import Songlist from "../components/dashboard/Songlist"
import Tasklist from "../components/dashboard/Tasklist"
import ActivityFeed from "../components/dashboard/ActivityFeed"
import '../../src/index.css'

export default function Dashboard({ goHome }) {
    return(
        <div className="min-h-screen flex gh-body" style={{ background: "#0B0F19", color:  "#F9FAFC"}}>
            <Sidebar />

            <main className="flex-1 min-w-0 min-h-screen">
                <Topbar goHome={goHome} />

                <div className="p-8 max-w-6xl mx-auto">
                    <h1 className="gh-display font-semibold text-2xl mb-1">Good Evening</h1>
                    <p className="text-sm text-[#94A3B8] mb-8">Here's what's happening across your bands.</p>

                    <Bandcards/>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <Songlist />
                        </div>
                        <div className="flex flex-col gap-6">
                            <Tasklist />
                            <ActivityFeed />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}