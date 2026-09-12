import { useMemo, useState } from 'react';
import { Activity, MessageSquare, CheckCircle2, Music, Plus, Sparkles, StickyNote } from 'lucide-react';
import { SONGS } from '../../../data/Mockdata';

const sectionStyles = {
    "In progress": "text-[#8B5CF6]",
    "Completed" : "text-[#34D399]",
}


export default function SongTab() {
    const [songs, setSongs] = useState(SONGS)
    const [selectedSongId, setSelectedSongId] = useState(SONGS.find(s => s.status === "In progress")?.id ?? SONGS[0]?.id ?? "");
    const [noteText, setNoteText] = useState("")
    const [commentText, setCommentText] = useState("")
    const groupedSongs = useMemo(() => ({
        inProgress : songs.filter((s) => s.status === "In progress"),
        completed: songs.filter(s => s.status === "Completed")
    }), [songs])

    const selectedSong = songs.find(s => s.id === selectedSongId) ?? songs[0] ?? null;

    if (!selectedSong) {
        return <div>No songs available</div>; //or return null if needed later
    }

    const addNewSong = () => {
        const newSong = {
      id: `song-${Date.now()}`,
      title: `Untitled track ${songs.length + 1}`,
      status: "In progress",
      tempo: "88 BPM",
      edited: "just now",
      mood: "New idea",
      key: "C major",
      length: "3:00",
      genre: "Indie",
      people: ["You"],
      notes: [{ text: "Fresh idea — capture the hook before the demo gets stale.", color: "#FDE68A" }],
      comments: [],
      activity: [{ text: "New song created" }],
    };

    setSongs((currentSongs) => [newSong, ...currentSongs]);
    setSelectedSongId(newSong.id);

    }

    const toggleSongStatus = (songId) => {
        setSongs((currentSongs) => currentSongs.map((s) => s.id === selectedSongId ? {
            ...s, status: s.status === "Completed" ? "In progress" : "Completed",
            edited: "just now",
            activity: [
                { text: `Song marked as ${s.status === "Completed" ? "In progress" : "Completed"}` },
                ...s.activity
            ]
        } : s))
    }

    const addNote = () => {
        if (!noteText.trim()) return;
        
        setSongs((currentSongs) => currentSongs.map((s) => s.id === selectedSongId ? {
            ...s, notes: [
                ...s.notes,
                { text: noteText.trim(), color: "#FDE68A" }
            ],
            edited: "just now",
            activity: [
                { text: "New note added" },
                ...s.activity],
        } : s))

        setNoteText("");
    }

    const addComment = () => {
        if (!commentText.trim()) return;

        const newComment = {
            id: `c-${Date.now()}`,
            author: "You",
            time: "just now",
            text: commentText.trim()
        }

        setSongs((currentSongs) => currentSongs.map((s) => s.id === selectedSongId ? {
            ...s, comments: [
                ...s, comments, newComment
            ],
            edited: "just now",
            activity: [{ text: "New comment added"}, ...s.activity],
        }: s))
        setCommentText("");
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="gh-display font-semibold text-3xl text-[#F8FAFC]">Song Studio</h1>
                    <p className="text-sm text-[#94A3B8]">Keep melodies moving from rough takes to release-ready tracks</p>

                </div>
                <button type="button" className="px-3 py-2 rounded-xl text-sm font-medium text-[#F8FAFC] bg-[#1E293B] hover:bg-[#334155]"
                style={{ background: "rgba(139, 92, 246, 0.18)", border: "1px solid rgba(139, 92, 246, 0.35)"}}>
                    New Song
                    <span className="inline-flex items-center gap-2">
                        <Plus size={14}/>
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-1 xl: grid-cols-[1.05fr_1.5fr] gap-6">
                <div className="space-y-6">
                    <Section 
                        title="In Progress"
                        songs={groupedSongs.inProgress}
                        selectedSongId={selectedSongId}
                        onSelectSong={setSelectedSongId}
                    />
                    <Section 
                        title="Completed"
                        songs={groupedSongs.completed}
                        selectedSongId={selectedSongId}
                        onSelectSong={setSelectedSongId} />
                </div>

            </div>

            <div className="rounded-3xl p-5 border border-white/10" style={{ background: "#111827"}}>
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#94A3B8]">Song Details</p>
                        <h2 className="mt-2 text-2xl font-semibold text-[#F8FAFC]">{selectedSong?.title || "Select a song to view details"}</h2>
                    </div>

                    <button 
                        type="button"
                        onClick={toggleSongStatus}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                        style = {{ background: selectedSong?.status === "Completed" ? "rgba(52, 211, 152, 0.12)" : "rgba(139, 92, 246, 0.12)", 
                                color: selectedSong?.status === "Completed" ? "#34D399" : "#C4B5FD",
                                border: selectedSong?.status === "Completed" ? "1px solid rgba(52, 211, 153, 0.35)" : "1px solid rgba(139, 92, 246, 0.35)",
                        }}>
                        {selectedSong?.status === "Completed" ? "Mark in progress" : "Mark completed"}
                    </button>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                    <Metric label="Tempo" value={selectedSong?.tempo || "-"} />
                    <Metric label="Key" value={selectedSong?.key || "-"} />
                    <Metric label="Length" value={selectedSong?.length || "-"} />
                </div>
                <div className="mt-6 space-y-5">
                    <Panel title="overview" icon={<Sparkles size={14}/>}>
                        <p className="text-sm text-[#F8FAFC] leading-6">
                            {selectedSong?.mood || "-"} · {selectedSong?.genre || "-"} · edited {selectedSong?.edited || "-"}
                        </p>
                    </Panel>

                    <Panel title="Sticky Notes" icon={<StickyNote size={14} />}>
                        <div className="space-y-3">
                            {selectedSong?.notes.map((n, index) => (
                                <div key={`${n.text}-${index}`} className="rounded-xl p-3 text-sm text-[#0F172A]" style={{ background: n.color || "#F8FAFC"}}>
                                    {n.text}
                                </div>
                            ))}
                        </div>

                        <div className="mt-3 flex gap-2">
                            <input value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder="Add a note..." className="flex-1 rounded-xl border border-white/10 bg-[#0F172A] px-3 py-2 text-sm text-[#F8FAFC] outline-none placeholder:text-[#94A3B8]" />
                            <button type="button" onClick={addNote} className="rounded-xl bg-violet-500 px-3 py-2 text-sm text-white">
                                Add
                            </button>
                        </div>
                    </Panel>


                    <Panel title="comments" icon={<MessageSquare size={14} />}>
                        <div className="space-y-3">
                            {selectedSong?.comments.map((c) => (
                                <div key={c.id} className="rounded-xl bg-white/5 p-3">
                                    <div className="flex items-center justify-between gap-3 text-xs text-[#94A3B8]">
                                        <span className="font-medium text-[#F8FAFC]">{c.author}</span>
                                        <span>{c.time}</span>
                                    </div>
                                    <p className="mt-2 text-sm text-[#E2E8F0]">{c.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-3 flex gap-2">
                            <input value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Add a comment..." className="flex-1 rounded-xl border border-white/10 bg-[#0F172A] px-3 py-2 text-sm text-[#F8FAFC] outline-none placeholder:text-[#94A3B8]" />
                            <button type="button" onClick={addComment} className="rounded-xl bg-violet-500 px-3 py-2 text-sm text-white">
                                Post
                            </button>
                            
                        </div>
                    </Panel>

                    <Panel title="activity" icon={<Activity size={14} />}>
                        <div className="space-y-3">
                            {selectedSong?.activity.map((a, index) => (
                                <div key={`${a.text}-${index}`} className="flex items-center justify-between gap-3 text-sm">
                                    <span className="text-[#E2E8F0]">{a.text}</span>
                                    <span className="text-[#94A3B8]">just now</span>
                                </div>
                            ))}
                        </div>
                    </Panel>
                </div>
            </div>
        </div>
    )


}

function Section({ title, songs, selectedSongId, onSelectSong }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#94A3B8]">{title}</h2>
                <span className={`text-xs font-medium ${sectionStyles[title] || "text-[#94A3B8]"}`}>
                    {songs.length}
                </span>
            </div>

            <div className="space-y-3">
                {songs.map((s) => (
                    <button
                        key={s.id}
                        type="button"
                        onClick={() => onSelectSong(s.id)}
                        className={`w-full rounded-2xl border p-4 text-left transition-all ${
                            selectedSongId === s.id ? "border-[#8B5CF6] bg-[#1E1B4B]/40" : "border-white/10 bg-[#111827] hover:bg-white/5"
                        }`}
                        >
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#1E293B"}}>
                                    <Music size={16} color="#8B5CF6"/>
                                </div>

                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-[#F8FAFC] truncate">{s.title}</p>
                                    <p className="text-xs text-[#94A3B8] truncate">{s.tempo} · edited {s.edited}</p>
                                </div>
                            </div>

                            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-[#94A3B8]">
                                <CheckCircle2 size={12} />
                                {s.people.length}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

function Panel({title, icon, children}) {
    return (
        <div className="rounded-2xl border border-white/10 p-4" style={{ background: "rgba(15, 23, 42, 0.7)"}}>
            <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#F8FAFC]">
                {icon}
                {title}
            </div>
            {children}
        </div>
    )
}

function Metric({label, value}) {
    return (
        <div className="rounded-xl border border-white/10 p-3"
            style={{ background: "rgba(15, 23, 42, 0.5)"}}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#94A3B8]">{label}</p>
            <p className="mt-2 text-sm font-medium text-[#F8FAFC]">{value}</p>
        </div>
    )
}