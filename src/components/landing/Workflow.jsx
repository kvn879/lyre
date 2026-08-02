import React from 'react'


const WORKFLOW = [
        "Create a Band",
        "Invite Members",
        "Create Music",
        "Upload Demo",
        "Finish Album"
    ];

export default function Workflow() {

    return(
        <section id="workflow" className="px-6 md:px-12 py-24 max-w-4xl mx-auto">
            <h2 className="gh-display font-semibold text-3xl md:text-4xl text-center mb-14">From Idea to Album</h2>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2">
                {WORKFLOW.map((step, i) => (
                    <React.Fragment key={step}>
                        <div className="flex flex-col items-center text-center gap-3">

                            <div className="w-11 h-11 rounded-full flex items-center justify-center gh-body font-semibold text-sm"
                            style={{ background: "#1E293B", border: "1px solid rgba(139, 92, 246, 0.4)", color: "#8B5CF6"}}>
                                {i + 1}
                            </div>
                            <span className="gh-body text-sm text-[#F8FAFC] w-26">{step}</span>
                        </div>
                        {i < WORKFLOW.length - 1 && (
                            <div className="hidden sm:block flex-1 h-px mb-7" style={{ background: "rgba(255,255,255,0.1)"}}/>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}