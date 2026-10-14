import { ArrowLeft, Guitar } from "lucide-react";

export default function Login({ onLogin, onBack }) {
    return (
        <main className="min-h-screen flex items-center justify-center px-5 py-12 gh-body" style={{ background: "#0B0F19", color: "#F8FAFC" }}>
            <section className="w-full max-w-md">
                <button type="button" onClick={onBack} className="mb-8 inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#F8FAFC]">
                    <ArrowLeft size={16} />
                    Back to Lyre
                </button>

                <div className="rounded-2xl border border-white/10 p-7" style={{ background: "#111827" }}>
                    <div className="mb-7 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "#8B5CF6" }}>
                            <Guitar size={20} color="#0B0F19" />
                        </div>
                        <span className="gh-display text-xl font-semibold">lyre</span>
                    </div>

                    <h1 className="gh-display text-2xl font-semibold">Welcome back</h1>
                    <p className="mt-2 text-sm text-[#94A3B8]">Sign-in is in demo mode for now.</p>

                    <button
                        type="button"
                        onClick={onLogin}
                        className="mt-7 w-full rounded-xl px-4 py-3 text-sm font-medium"
                        style={{ background: "#8B5CF6", color: "#F8FAFC" }}
                    >
                        Continue to demo dashboard
                    </button>
                    <p className="mt-4 text-center text-xs text-[#94A3B8]">No account or password required in this preview.</p>
                </div>
            </section>
        </main>
    );
}
