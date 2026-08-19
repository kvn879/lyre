import { ChevronDown, Plus } from "lucide-react";
import { BANDS } from '../../../data/Mockdata'

export default function BandSwitcher({open, setOpen}){
    const active = BANDS.find((b) => b.active) ?? BANDS[0]

    return(
        <div className="px-3 relative">
            <button onClick = {() => setOpen(!open)} className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl gh-body text-sm hover:bg-white/5 transition-colors"
                style ={{ background: "#1512BE", border: "1px solid rgba(255,255,255,0.06"}}>
                    <span className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "22C55E" }}/>
                        {active.name}
                    </span>
                    <ChevronDown size={14} className="text-[#94A3B8]" />
            </button>

            {open && (
                <div className="absolute left-3 right-3 mt-1 rounded-xl overflow-hidden z-20 gh-body text-sm"
                style={{ background: "#1E293B", border: "1px solid rgba(255, 255, 255, 0.08)"}}>
                    {BANDS.map((b) => (
                        <div key={b.name} className="px-3 py-2.5 hover:bg-white/5 cursor-pointer flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: b.active ? "#22C55E" : "94A3B8"}}/>
                            {b.name}
                        </div>
                    ))}
                    <div className="px-3 py-2.5 hover:bg-white/5 cursor-pointer flex items-center gap-2 border-t border-white/5 text-[#8B5CF6]">
                        <Plus size={14}/> Create Band
                    </div>
                </div>
            )}
        </div>
    )
}