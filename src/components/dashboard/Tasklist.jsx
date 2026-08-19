import { CheckCircle2 } from "lucide-react";

const TASKS = [
  { task: "Rewrite bridge", who: "Mike", due: "Tomorrow" },
  { task: "Mix drum layer", who: "Sarah", due: "Fri" },
];

export default function TaskList() {
  return (
    <div className="rounded-2xl p-5" style={{ background: "#151B2E", border: "1px solid rgba(255,255,255,0.06)" }}>
      <h2 className="font-semibold text-sm mb-4">Upcoming tasks</h2>
      <div className="flex flex-col gap-3">
        {TASKS.map((t) => (
          <div key={t.task} className="flex items-start gap-2.5">
            <CheckCircle2 size={15} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <div className="text-sm">
              <p className="leading-tight">{t.task}</p>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Assigned to {t.who} · {t.due}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}