const STATUS_STYLES = {
  Writing: "bg-sky-500/15 text-sky-300 border border-sky-500/30",
  Recording: "bg-orange-500/15 text-orange-300 border border-orange-500/30",
  Finished: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
};
 
export default function Badge({ status }) {
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium gh-body ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  );
}
 