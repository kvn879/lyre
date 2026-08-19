import { Search, Bell } from 'lucide-react'

export default function Topbar({ goHome }){
    return(
        <div className = "flex items-center justify-between px-8 py-5 border-b border-white/5">
            <div className="relative w-full max-w-xs"> 
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"/>
                <input placeholder='Search songs, files, people' className="w-full pl-9 pr-3 py-2 rounded0xl text-sm outline-none placeholder:text-[#94A3B8]"
                style={{ background: "1511B2E", border:"1px solid rgba(255, 255, 255, 0.06)"}}/>
            </div>
            <div className="flex items-center gap-4">
                {goHome && (
                    <button onClick = {goHome} className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
                        ← Back to site
                    </button>
                )}
            <Bell size={17} className="text-[#94A3B8] hover:text-[#F8FAFC] cursor-pointer transition-colors"/>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
            style={{ background: "#8B5CF6"}}>
                
            </div>
            </div>
        </div>
    )
}