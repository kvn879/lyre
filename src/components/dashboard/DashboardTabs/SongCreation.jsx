import { useState } from "react";

const defaultForm = {
    title: "",
    artists: "",
    bpm: "",
    key: "",
    genre: "",
    status: "In progress",
    createdAt: new Date().toISOString().slice(0, 10),
    audioFiles: "",
    notes: "",
}


export default function SongCreation({ onCreate, onCancel}) {
    const [form, setForm] = useState(defaultForm);
    const[error, setError] = useState(null);

    const updateField = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.title.trim()) {
            setError("Title is required");
            return
        }

        const createdAt = new Date().toISOString();
        const artists = form.artists.split(",").map((a) => a.trim()).filter(Boolean);
        const newSong = {
            id: `song-${Date.now()}`,
            title: form.title.trim(),
            status: form.status,
            tempo: form.bpm ? `${form.bpm} BPM` : "Not Set",
            edited: createdAt,
            createdAt: form.createdAt,
            genre: form.genre || "Uncategorized",
            key: form.key || "Not set",
            length: form.length || "Not set",
            people: artists.length ? artists : ["Unknown"],
            notes: form.notes.trim() ? [{id: crypto.randomUUID(), text: form.notes.trim(), color: "#FDE68A", createdAt}] : [],
            comments: [],
            activity: [
                {text: `Song created by ${artists.length ? artists.join(", ") : "Unknown"}`, createdAt},
            ],
        };

        onCreate?.(newSong);
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="gh-display font-semibold text-3xl text-[#F8FAFC]">
                        Create Song
                    </h1>
                    <p className="text-sm text-[#94A3B8]">
                        Add information about this track. You can edit this later
                    </p>
                </div>

                <button type="button" className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#F8FAFC]" onClick={onCancel} >
                    Back to Songs
                </button>
            </div>
            <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 p-6" style={{background: "#111827"}}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Title" name="title" value={form.title} onChange={updateField} placeholder="Song title" />
                    <Field label="Artists" name="artists" value={form.artists} onChange={updateField} placeholder="John, Mike, Sammy" />
                    <Field label="BPM" name="bpm" value={form.bpm} onChange={updateField} placeholder="96"/>
                    <Field label="Key" name="key" value={form.key} onChange={updateField} placeholder="C# Major"/>
                    <Field label="Genre" name="genre" value={form.genre} onChange={updateField} placeholder="Indie" />
                    <Field label="Creation Date" name="createdAt" type="date" value={form.createdAt} onChange={updateField} />
                </div>
                <div className="mt-4">
                    <label className="mb-2 block text-sm text-[#E2E8F0]">
                        Initial Status
                    </label>

                    <select name="status" value={form.status} onChange={updateField} className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-3 py-2.5 text-sm text-[#F8FAFC] outline-none">
                        <option value="In progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label className="mb-2 block text-sm text-[#E2E8F0]">
                        Initial notes
                    </label>

                    <textarea name="notes" value={form.notes} onChange={updateField} rows={4} placeholder="Arrangement ideas, production composition, etc."
                        className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-3 py-2.5 text-sm text-[#F8FAFC] outline-none placeholder:text-[#94A3B8]">
                    </textarea>
                </div>
                {error && (
                    <p className="mt-4 text-sm text-red-300">{error}</p>
                )}

                <div className="mt-6 flex justify-end">
                    <button type="submit" className="rounded-xl px-4 py-2 text-sm font-medium text-white" style={{ background: "#8B5CF6"}}>
                        Create Song
                    </button>
                </div>
            </form>

        </div>
    )



}

function Field({label, name, value, onChange, placeholder, type = "text"}) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm text-[#E2E8F0]">{label}</span>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-lg border border-white/10 bg-[#0F172A] px-3 py-2.5 text-sm text-[#F8FAFC] outline-none placeholder:text-[#94A3B8]" />
        </label>
    )
}