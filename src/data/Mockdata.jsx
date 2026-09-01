export const BANDS =[
    { name: 'Beachside Talks', members: 4, songs: 20, active: true},
    { name: 'Pasteboard', members: 2, songs: 13, active: false },
    { name: 'Fleeting Joys', members: 2, songs: 40, active: false}
]

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
      { text: "Lead vocal should feel more intimate in the verse before the chorus lift.", color: "#FDE68A" },
      { text: "Try a brighter toms busier mix on the second half of the bridge.", color: "#C4B5FD" },
    ],
    comments: [
      { id: "c1", author: "Kira", time: "3m", text: "The verse groove is landing. I want more space before the snare." },
      { id: "c2", author: "Milo", time: "1h", text: "Can we add a subtle synth swell in the final chorus?" },
    ],
    activity: [
      { text: "Kira uploaded a new guitar pass" },
      { text: "Milo commented on the bridge arrangement" },
      { text: "Mix revision saved 11 minutes ago" },
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
      { text: "The intro riff feels good; keep it dry and punchy before the chorus swells.", color: "#BFDBFE" },
      { text: "Second verse needs a stronger vocal hook; test a higher melody line.", color: "#FBCFE8" },
    ],
    comments: [
      { id: "c3", author: "Milo", time: "18m", text: "I love the tension in the intro. We need a more cinematic cymbal lift before the drop." },
    ],
    activity: [
      { text: "Drum tracking was re-edited" },
      { text: "New chorus vocal comp added" },
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
      { text: "Final mix is approved. Keep the vocal automation subtle in the outro.", color: "#A7F3D0" },
      { text: "Master pass is ready for final listening with the full band.", color: "#F9A8D4" },
    ],
    comments: [
      { id: "c4", author: "Jules", time: "2d", text: "This version feels finished. The bass line sits perfectly in the chorus." },
      { id: "c5", author: "Sienna", time: "3d", text: "Love the outro texture. I’d keep it as-is." },
    ],
    activity: [
      { text: "Master was approved by the band" },
      { text: "Final vocal stems were exported" },
      { text: "Release-ready version archived" },
    ],
  },
];
