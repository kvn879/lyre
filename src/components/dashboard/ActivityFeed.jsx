import { Upload, Mic, Headphones } from "lucide-react";

const ACTIVITY = [
  { icon: Upload, text: <><span className="font-medium">John</span> uploaded <span className="text-[#8B5CF6]">demo_v3.wav</span></>, time: "2h ago" },
  { icon: Mic, text: <><span className="font-medium">Sarah</span> recorded a vocal take</>, time: "5h ago" },
  { icon: Headphones, text: <><span className="font-medium">Mike</span> commented on <span className="text-[#8B5CF6]">Sunset Drive</span></>, time: "yesterday" },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl p-5" style={{ background: "#151B2E", border: "1px solid rgba(255,255,255,0.06)" }}>
      <h2 className="font-semibold text-sm mb-4">Recent activity</h2>
      <div className="flex flex-col gap-3 text-sm">
        {ACTIVITY.map(({ icon: Icon, text, time }, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <Icon size={14} className="text-[#94A3B8] mt-0.5 shrink-0" />
            <p>
              {text} <span className="text-[#94A3B8] text-xs">· {time}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}