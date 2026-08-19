import { Music, Clock } from "lucide-react";
import Avatar from "../../common/Avatar";
import Badge from "../../common/Badge";
import { SONGS } from "../../data/mockData";

export default function SongList() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-sm">Recent songs</h2>
        <button className="text-xs text-[#8B5CF6] hover:underline">View all</button>
      </div>
      <div className="flex flex-col gap-3">
        {SONGS.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl p-4 flex items-center justify-between transition-all duration-200 hover:-translate-y-1 cursor-pointer"
            style={{ background: "#151B2E", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#1E293B" }}>
                <Music size={16} color="#8B5CF6" />
              </div>
              <div>
                <p className="text-sm font-medium">{s.title}</p>
                <p className="text-xs text-[#94A3B8] flex items-center gap-1">
                  <Clock size={11} /> {s.tempo} · edited {s.edited}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                {s.people.map((p, i) => (
                  <Avatar key={p} letter={p} i={i} />
                ))}
              </div>
              <Badge status={s.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}