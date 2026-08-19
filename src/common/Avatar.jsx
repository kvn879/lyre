

export default function Avatar({letter, i}) {
    return(
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold gh-body ring-2 ring-[#0B0F19]"
        style={{background: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
            marginLeft: i === 0 ? 0 : -8,
            color: "#F8FAFC",
            zIndex: 10 - i,
            position: "relative",
        }}>
            {letter}
        </div>
    )
}