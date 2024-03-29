import { AiOutlineHome } from "react-icons/ai";
import { FaHistory, FaListUl } from "react-icons/fa";
import { MdList, MdDescription } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarIcon icon={<AiOutlineHome size='65%'/>} text={"Back to home"} url={"/"} />
            <SidebarIcon icon={ <MdList size='65%' />} text={"Projects"} url={"/projects"} />
            <SidebarIcon icon={ <MdDescription size='65%' />} text={"Resume"} url={"/resume"} />
        </div>
    )
};

export function SidebarIcon({ icon, text, url }) {
    return (
        <div className="sidebar-icon group">
            <Link href={url}>
                {icon}
            </ Link>
                <span className="sidebar-tooltip group-hover:scale-100">
                    {text}
                </span>
        </div>
    )
};

export default Sidebar;