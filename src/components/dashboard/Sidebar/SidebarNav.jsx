import {Home, Music, Users, ListChecks, Folder, Calendar, MessageCircle, Settings} from "lucide-react"

const NAV_ITEMS =[
    {icon: Home, label: "Dashboard", active: true},
    {icon: Music, label: "Songs"},
    {icon: Users, label: "Members"},
    {icon: ListChecks, label: "Tasks"},
    {icon: Folder, label: "Files"},
    {icon: Calendar, label: "Calendar"},
    {icon: MessageCircle, label: "Chat"},
    {icon: Settings, label: "Settings"}
]

export default function SidebarNav(){
    return(
        <nav className="px-3 mt-5 gh-body text-sm flex flex-col gap-0.5">
            {NAV_ITEMS.map(({icon: Icon, label, active}) => (
                <button key={label} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-left 
                    ${active? "text-[#F8FAFC]" : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5"
                }`} style={active ? {background: "rgba(139, 92, 246, 0.15)"} : {}}>
                    <Icon size={16}/>
                    {label}
                </button>
            ))}
        </nav>
    )   
}