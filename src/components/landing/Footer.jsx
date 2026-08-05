import { Guitar} from "lucide-react";

export default function Footer() {
    return(
        <footer className="px-6 md:px-12 py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 gh-body text-sm text-[#94A3B8]">
            <div className="flex items-center gap-2">
                <Guitar size={15}></Guitar>
                    <span>lyre</span>
            </div>
            <div className="flex items-center gap-6">
                <a href="#" className="hover:text-[#F8FAFC] transition-colors">About</a>
                <a href="#" className="hover:text-[#F8FAFC] transition-colors flex items-center gap-1">
                    <Guitar size={13}>Github</Guitar>
                </a>
                <a href="#" className="hover:text-[#F8FAFC] transition-colors"></a>
            </div>
        </footer>
    );
}