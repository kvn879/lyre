export const BANDS =[
    { name: 'Beachside Talks', members: 4, songs: 20, active: true},
    /*{ name: 'Pasteboard', members: 2, songs: 13, active: false },
    { name: 'Fleeting Joys', members: 2, songs: 40, active: false}*/
]

const minutesAgo = (minutes) => new Date(Date.now() - minutes * 60_000).toISOString();

export const SONGS = [
  {
    id: "sign",
    title: "sign",
    status: "In progress",
    tempo: "84 BPM",
    edited: "2h ago",
    mood: "Dream pop",
    key: "A minor",
    length: "3:42",
    genre: "Indie pop",
    people: ["K", "S", "M"],
    notes: [
      { id: "sign-note-1", text: "Lead vocal should feel more intimate in the verse before the chorus lift.", color: "#FDE68A", createdAt: minutesAgo(45) },
      { id: "sign-note-2", text: "Try a brighter toms busier mix on the second half of the bridge.", color: "#C4B5FD", createdAt: minutesAgo(12) },
    ],
    comments: [
      { id: "c1", author: "Kira", createdAt: minutesAgo(3), text: "The verse groove is landing. I want more space before the snare." },
      { id: "c2", author: "Milo", createdAt: minutesAgo(60), text: "Can we add a subtle synth swell in the final chorus?" },
    ],
    activity: [
      { text: "Kira uploaded a new guitar pass", createdAt: minutesAgo(11) },
      { text: "Milo commented on the bridge arrangement", createdAt: minutesAgo(60) },
      { text: "Mix revision saved", createdAt: minutesAgo(120) },
    ],
  },
  {
    id: "squall",
    title: "Squall",
    status: "In progress",
    tempo: "100 BPM",
    edited: "yesterday",
    mood: "Alt rock",
    key: "D major",
    length: "4:08",
    genre: "Alternative",
    people: ["K", "M"],
    notes: [
      { id: "squall-note-1", text: "The intro riff feels good; keep it dry and punchy before the chorus swells.", color: "#BFDBFE", createdAt: minutesAgo(1440) },
      { id: "squall-note-2", text: "Second verse needs a stronger vocal hook; test a higher melody line.", color: "#FBCFE8", createdAt: minutesAgo(1200) },
    ],
    comments: [
      { id: "c3", author: "Milo", createdAt: minutesAgo(18), text: "I love the tension in the intro. We need a more cinematic cymbal lift before the drop." },
    ],
    activity: [
      { text: "Drum tracking was re-edited", createdAt: minutesAgo(1440) },
      { text: "New chorus vocal comp added", createdAt: minutesAgo(2880) },
    ],
  },
  {
    id: "bunmei",
    title: "BUNMEI",
    status: "Completed",
    tempo: "100 BPM",
    edited: "3d ago",
    mood: "Electronic haze",
    key: "F# minor",
    length: "3:59",
    genre: "Electronic",
    people: ["K", "S", "M", "J"],
    notes: [
      { id: "bunmei-note-1", text: "Final mix is approved. Keep the vocal automation subtle in the outro.", color: "#A7F3D0", createdAt: minutesAgo(2880) },
      { id: "bunmei-note-2", text: "Master pass is ready for final listening with the full band.", color: "#F9A8D4", createdAt: minutesAgo(4320) },
    ],
    comments: [
      { id: "c4", author: "Jules", createdAt: minutesAgo(2880), text: "This version feels finished. The bass line sits perfectly in the chorus." },
      { id: "c5", author: "Sienna", createdAt: minutesAgo(4320), text: "Love the outro texture. I’d keep it as-is." },
    ],
    activity: [
      { text: "Master was approved by the band", createdAt: minutesAgo(2880) },
      { text: "Final vocal stems were exported", createdAt: minutesAgo(4320) },
      { text: "Release-ready version archived", createdAt: minutesAgo(5760) },
    ],
  },
];
