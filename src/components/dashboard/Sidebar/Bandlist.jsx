import {BANDS} from '../../../data/Mockdata'


export default function Bandlist() {
    return(
        <div className="px-3 mt-6">
            <p className="gh-body text-xs text-[#94A3B8] px-3 mb-2 uppercase tracking-wide">Your Bands</p>
            {BANDS.map((b) => (
                <div key={b.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg gh-body text-sm text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: b.active ? "#22C55E" : "#334155"}}/>
                    {b.name}
                </div>
            ))}
        </div>
    )
}