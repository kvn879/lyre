import {Guitar} from 'lucide-react'
import { BANDS } from '../../data/Mockdata'

export default function Bandcards() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {BANDS.map((b) => (
                <div key={b.name} className='rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 cursor-pointer'
                style={{ background: "#151B2E", border: "1px solid rgba(255, 255, 255, 0.06)"}}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4">
                        <Guitar size={16} color="#8B5CF6"/>
                    </div>
                    <p className="font-semibold text-sm mb-1">{b.name}</p>
                    <p className="text-xs text-[#94A3B8]">
                        {b.members} members · {b.songs} songs
                    </p>
                </div>
            ))}
        </div>
    );
}