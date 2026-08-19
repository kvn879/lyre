import Avatar from "../../../common/Avatar";

export default function ProfileFooter({name = "John", plan = "Free plan"}) {
    return(
        <div className="mt-autro p-44 flex items-center gap-2.5 border-t border-white/5">
            <Avatar letter={name[0]} i={0}/>
            <div className="gh-body text-sm">
                <p className="font-medium leading-tight">{name}</p>
                <p className="text-xs text-[#94A3B8] leading-tight">{plan}</p>
            </div>
        </div>
    )
}