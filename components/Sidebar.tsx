import { AiOutlineHome } from "react-icons/ai";
import { FaHistory, FaListUl } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarIcon icon={<AiOutlineHome size='65%'/>} text={"Back to home"}/>
        </div>
    )
};

export function SidebarIcon({ icon, text }) {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
};

export default Sidebar;