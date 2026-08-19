import { Play } from "lucide-react"
import Badge from '../../common/Badge'
import { SONGS } from "../../data/Mockdata" 

export default function Hero({ goToApp }){
    return(
        <section className="px-6 md:px-12 pt-20 pb-24 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs gh-body text-[#94A3B8] border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }}></span>
                <span>Now in Open Beta</span>
            </div>
            <h1 className="gh-display font-semibold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
                Collaborate on Music
                <br/>
                <span style={{ color: "#8B5CF6"}}>Not spreadsheets</span>
            </h1>
            <p className="gh-body text-lg text-[#94A3B8] max-w-xl mx-auto mb-10 leading-relaxed">
                Write songs together, upload demos, assign tasks, and keep every version of every track organized in one place built for bands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium gh-body transition-all duration-200 hover:-translate-y-1 flex items-center justify-center gap-2" style={{ background: "#8B5CF6", color: "#F8FAFC"}}>
                    Start For Free
                </button>
                <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium gh-body border border-white/10 hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-2">
                    <Play size={15}/>View Demo
                </button>
            </div>

            {/* Screenshot mock here */}
            
            <div className="mt-20 rounded-2xl overflow-hidden text-left"
            style= {{ background: "#151B2E", border: "1px solid rgba(255,255,255,0.08)", boxShadow:"0 40px 80px -20px rgba(0,0,0,0.5)"}}>
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8]/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8]/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8]/30" />
                </div>
                <div className="flex">
                    <div className="w-44 border-r border-white/5 p-4 gh-body text-sm text-[#94A3B8] sm:block">
                        {["Songs", "Timeline", "Kanban", "Comments", "Wavefrom"].map((item, i) => (
                            <div key={item} className={`px-3 py-2 rounded-lg mb-1 ${i === 0 ? "bg-white/5 text-[#F8FAFC]": ""}`}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {SONGS.map((s) => (
                                <div key={s.title} className="rounded-xl p-4" style={{ background: "#1E293B"}}>
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <p className="gh-body font-medium text-sm">{s.title}</p>
                                            <p className="gh-body text-xs text-[#94A3B8] mt-0.5">{s.tempo}</p>
                                        </div>
                                        <Badge status={s.status}></Badge>
                                    </div>
                                    <div className="flex items-center h-6 gap-0.5 opacity-60"> {/* Waveform bars */}
                                        {Array.from({length: 24}).map((_, i) => (
                                            <span key={i} className="w-0.5 rounded-full" style={{ height: `${8 + ((i * 37) % 16)}px`, background: "#8B5CF6"}}/>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}