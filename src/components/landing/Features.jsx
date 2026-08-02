import { Music, Users, Folder } from "lucide-react"

const DETAILS = [
    {icon : Music, title: "Song Workspaces", desc:"Everything for one song in one place — lyrics, tabs, tempo, and takes."},
    {icon: Users, title: "Band Collaboration", desc: "Invite bandmates, assign parts, and work through ideas together in real time."},
    {icon: Folder, title:"File Sharing", desc: "Upload demos, lyrics, tabs or sheet music, equipped with version history so nothing gets lost."},
]

export default function Features(){
    return(
        <section id="features">
            <h2 className="gh-display font-semibold text-3xl md:text-4xl text-center mb-3">Everything a Band Needs</h2>
            <p className="gh-body text-[#94A3B8] text-center mb-14">One Workspace, from first riff to final mix</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {DETAILS.map(({icon: Icon, title, desc}) => (
                    <div key={title} className="rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1" 
                    style={{background: "#151B2E", border: '1px solid rgba(255, 255, 255, 0.06)'}}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background: "rgba(139, 92, 246, 0.15)"}}>
                            <Icon size={19} color="#8B5CF6"/>
                        </div>
                        <h3 className="gh-body font-semibold text-base mb-2">{title}</h3>
                        <p className="gh-body text-sm text-[#94A3B8] leading-relaxed">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

