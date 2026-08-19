import Logo from "../shared/Logo";
 
export default function Nav({ goToApp }) {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5">
      <Logo />
      <div className="hidden md:flex items-center gap-8 gh-body text-sm text-[#94A3B8]">
        <a href="#features" className="hover:text-[#F8FAFC] transition-colors">Features</a>
        <a href="#pricing" className="hover:text-[#F8FAFC] transition-colors">Pricing</a>
        <a href="#workflow" className="hover:text-[#F8FAFC] transition-colors">Workflow</a>
      </div>
      <div className="flex items-center gap-3 gh-body text-sm">
        <button className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors px-3 py-2">Log in</button>
        <button
          onClick={goToApp}
          className="px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "#8B5CF6", color: "#F8FAFC" }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}