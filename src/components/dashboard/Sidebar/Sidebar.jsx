import SidebarNav from "./SidebarNav";
import {Guitar} from "lucide-react"
import Bandlist from './Bandlist';
import ProfileFooter from './ProfileFooter';

export default function Sidebar({ selectedTab, onSelect}) {
    return(
        <aside className="w-64 shrink-0 flex flex-col h-screen sticky top-0 border-r border-white/5"
        style={{ background: "#0B0F19"}}>
            <div className="p-4">
                <Guitar size={10}/>
            </div>

            <SidebarNav selectedTab={selectedTab} onSelect={onSelect} />
            <Bandlist/>
            <ProfileFooter/>
        </aside>
    )
}