import { Guitar } from 'lucide-react'

export default function Navbar({goToApp}) {
    return (
        <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/5">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#8B5CF6"}}>
                    <Guitar size={17} strokeWidth={2.2} color="#0B0F19"/>
                </div>
                <span className="gh-display font-semibold text-lg tracking-tight">lyre</span>
            </div>
            <div className='hidden md:flex items-center gap-8 gh-body text-sm text-[#94A3B8]'>
                <a className="hover:text-[#F8FAFC] transition-colors">Features</a>
                <a className="hover:text-[#F8FAFC] transition-colors">Workflow</a>
            </div>
            <div className="flex items-center gap-3 gh-body text-sm">
                <button className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors px-3 py-2">Log In</button>
                <button onClick={goToApp} 
                className="px-4 py-2 rounded-xl font-meduium transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#8B5CF6", color: "#F8FAFC"}}>
                    Get Started
                </button>
            </div>
        </nav>
    );
}
