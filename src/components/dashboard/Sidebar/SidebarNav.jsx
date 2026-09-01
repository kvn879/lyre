import {Home, Music, Users, ListChecks, Folder, Calendar, MessageCircle, Settings} from "lucide-react"

const NAV_ITEMS = [
    {id: "Dashboard", icon: Home, label: "Dashboard"},
    {id: "Songs", icon: Music, label: "Songs"},
    {id: "Members", icon: Users, label: "Members"},
    {id: "Tasks", icon: ListChecks, label: "Tasks"},
    {id: "Files", icon: Folder, label: "Files"},
    {id: "Calendar", icon: Calendar, label: "Calendar"},
    {id: "Chat", icon: MessageCircle, label: "Chat"},
    {id: "Settings", icon: Settings, label: "Settings"}
]

export default function SidebarNav({ selectedTab, onSelect }){
    return(
        <nav className="px-3 mt-5 gh-body text-sm flex flex-col gap-0.5">
            {NAV_ITEMS.map(({id, icon: Icon, label}) => {
                const active = selectedTab === id

                return (
                    <button
                        key={id}
                        type="button"
                        onClick={() => onSelect?.(id)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-left 
                            ${active ? "text-[#F8FAFC]" : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5"}
                        `}
                        style={active ? {background: "rgba(139, 92, 246, 0.15)"} : {}}
                    >
                        <Icon size={16}/>
                        {label}
                    </button>
                )
            })}
        </nav>
    )   
}