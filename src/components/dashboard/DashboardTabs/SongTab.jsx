import { useMemo, useState } from 'react';
import { Activity, MessageSquare, CheckCircle2, Music, Plus, Sparkles, StickyNote, Trash2 } from 'lucide-react';
import { SONGS } from '../../../data/Mockdata';
import SongCreation from './SongCreation';

const sectionStyles = {
    "In progress": "text-[#8B5CF6]",
    "Completed" : "text-[#34D399]",
}


export default function SongTab() {
    const [songs, setSongs] = useState(SONGS)
    const [view, setView] = useState("list")
    const [selectedSongId, setSelectedSongId] = useState(SONGS.find(s => s.status === "In progress")?.id ?? SONGS[0]?.id ?? "");
    const [noteText, setNoteText] = useState("")
    const [commentText, setCommentText] = useState("")
    const groupedSongs = useMemo(() => ({
        inProgress : songs.filter((s) => s.status === "In progress"),
        completed: songs.filter(s => s.status === "Completed")
    }), [songs])

    const selectedSong = songs.find(s => s.id === selectedSongId) ?? songs[0] ?? null;

    const handleCreateSong = (newSong) => {
        setSongs((currentSongs) => [newSong, ...currentSongs]);
        setSelectedSongId(newSong.id);
        setView("list");
    }

    if (view === "create") {
        return (
            <SongCreation
                onCancel={() => setView("list")}
                onCreate={handleCreateSong}
            />
        );
    }

    if (!selectedSong) {
        return (
            <div className="space-y-4">
                <p className="text-sm text-[#94A3B8]">No songs yet.</p>
                <button type="button" onClick={() => setView("create")}>Create your first song</button>
            </div>
        );
    }

    const toggleSongStatus = (songId) => {
        const changedAt = new Date().toISOString();
        setSongs((currentSongs) => currentSongs.map((song) => song.id === songId ? {
            ...song,
            status: song.status === "Completed" ? "In progress" : "Completed",
            edited: changedAt,
            activity: [
                { text: `Song marked as ${song.status === "Completed" ? "In progress" : "Completed"}`, createdAt: changedAt },
                ...song.activity
            ]
        } : song))
    }

    const addNote = () => {
        if (!noteText.trim()) return;

        const createdAt = new Date().toISOString();
        setSongs((currentSongs) => currentSongs.map((song) => song.id === selectedSongId ? {
            ...song,
            notes: [...song.notes, {
                id: crypto.randomUUID(),
                text: noteText.trim(),
                color: "#FDE68A",
                createdAt,
            }],
            edited: createdAt,
            activity: [
                { text: "New note added", createdAt },
                ...song.activity],
        } : song))

        setNoteText("");
    }

    const addComment = () => {
        if (!commentText.trim()) return;

        const createdAt = new Date().toISOString();
        const newComment = {
            id: crypto.randomUUID(),
            author: "You",
            createdAt,
            text: commentText.trim()
        }

        setSongs((currentSongs) => currentSongs.map((song) => song.id === selectedSongId ? {
            ...song,
            comments: [...song.comments, newComment],
            edited: createdAt,
            activity: [{ text: "New comment added", createdAt }, ...song.activity],
        }: song))
        setCommentText("");
    }

    const deleteNote = (noteId) => {
        const deletedAt = new Date().toISOString();
        setSongs((currentSongs) => currentSongs.map((song) =>
            song.id === selectedSongId ? {
                ...song,
                notes: song.notes.filter((note) => note.id !== noteId),
                edited: deletedAt,
                activity: [{ text: "Sticky note deleted", createdAt: deletedAt }, ...song.activity],
            } : song
        ));
    }

    const deleteComment = (commentId) => {
        const deletedAt = new Date().toISOString();
        setSongs((currentSongs) => currentSongs.map((song) =>
            song.id === selectedSongId ? {
                ...song,
                comments: song.comments.filter((comment) => comment.id !== commentId),
                edited: deletedAt,
                activity: [{ text: "Comment deleted", createdAt: deletedAt }, ...song.activity],
            } : song
        ));
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="gh-display font-semibold text-3xl text-[#F8FAFC]">Song Studio</h1>
                    <p className="text-sm text-[#94A3B8]">Keep melodies moving from rough takes to release-ready tracks</p>

                </div>
                <button type="button" onClick={() => setView("create")} className="px-3 py-2 rounded-xl text-sm font-medium text-[#F8FAFC] bg-[#1E293B] hover:bg-[#334155]"
                style={{ background: "rgba(139, 92, 246, 0.18)", border: "1px solid rgba(139, 92, 246, 0.35)"}}>
                    <span className="inline-flex items-center gap-2">
                        <Plus size={14}/>
                    </span>
                    New Song
                </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_1.5fr] gap-6">
                <div className="space-y-6">
                    <Section 
                        title="In progress"
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
                        onClick={() => toggleSongStatus(selectedSong.id)}
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
                            {selectedSong?.mood || "-"} · {selectedSong?.genre || "-"} · edited {formatRelativeTime(selectedSong?.edited, "-")}
                        </p>
                    </Panel>

                    <Panel title="Sticky Notes" icon={<StickyNote size={14} />}>
                        <div className="space-y-3">
                            {selectedSong?.notes.map((n, index) => (
                                <div key={n.id ?? `${n.text}-${index}`} className="flex items-start justify-between gap-3 rounded-xl p-3 text-sm text-[#0F172A]" style={{ background: n.color || "#F8FAFC"}}>
                                    <div>
                                        <p>{n.text}</p>
                                        <time className="mt-2 block text-xs text-slate-600">{formatRelativeTime(n.createdAt)}</time>
                                    </div>
                                    <button type="button" onClick={() => deleteNote(n.id)} aria-label="Delete note" title="Delete note" className="shrink-0 rounded p-1 text-slate-700 hover:bg-black/10">
                                        <Trash2 size={14} />
                                    </button>
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
                                        <div className="flex items-center gap-2">
                                            <time dateTime={c.createdAt}>{formatRelativeTime(c.createdAt, c.time)}</time>
                                            <button type="button" onClick={() => deleteComment(c.id)} aria-label="Delete comment" title="Delete comment" className="rounded p-1 hover:bg-white/10 hover:text-white">
                                                <Trash2 size={13} />
                                            </button>
                                        </div>
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
                                    <time className="shrink-0 text-[#94A3B8]" dateTime={a.createdAt}>{formatRelativeTime(a.createdAt)}</time>
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
                                    <p className="text-xs text-[#94A3B8] truncate">{s.tempo} · edited {formatRelativeTime(s.edited, "-")}</p>
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

function formatRelativeTime(timestamp, fallback = "Recently") {
    if (!timestamp) return fallback;

    const elapsedSeconds = Math.max(0, Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000));
    if (!Number.isFinite(elapsedSeconds)) return fallback;
    if (elapsedSeconds < 60) return "just now";

    const units = [
        [60 * 60 * 24 * 365, "year"],
        [60 * 60 * 24 * 30, "month"],
        [60 * 60 * 24, "day"],
        [60 * 60, "hour"],
        [60, "minute"],
    ];
    const [secondsPerUnit, unit] = units.find(([seconds]) => elapsedSeconds >= seconds) ?? units[units.length - 1];
    const amount = Math.floor(elapsedSeconds / secondsPerUnit);
    return `${amount} ${unit}${amount === 1 ? "" : "s"} ago`;
}