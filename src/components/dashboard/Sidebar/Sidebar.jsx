import { useState, useRef, useEffect } from 'react'
import SidebarNav from "./SidebarNav";
import {Guitar} from "lucide-react"
import Bandlist from './Bandlist';
import ProfileFooter from './ProfileFooter';
import BandSwitcher from './BandSwitcher';

export default function Sidebar({ selectedTab, onSelect}) {
    const [bandOpenMenu, setBandOpenMenu] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setBandOpenMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return(
        <aside ref={ref} className="w-64 shrink-0 flex flex-col h-screen sticky top-0 border-r border-white/5"
        style={{ background: "#0B0F19"}}>
            <div className="p-4">
                <Guitar size={10}/>
            </div>

            <BandSwitcher open={bandOpenMenu} setOpen={setBandOpenMenu}/>
            <SidebarNav selectedTab={selectedTab} onSelect={onSelect} />
            <Bandlist/>
            <ProfileFooter/>
        </aside>
    )
}