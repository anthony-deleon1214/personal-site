import { HiSun, HiMoon } from "react-icons/hi";

const function toggleVis() = {
    return ()
}

const DarkModeToggle = () => {
    return (
        <div className="toggle-container-hide">
            <ToggleIcon icon={<HiMoon size='55%'/>} />
        </div>
    )
};

export function ToggleIcon({ icon }) {
    return (
        <div className="toggle-icon">
            { icon }
        </div>
    )
};

export default DarkModeToggle;