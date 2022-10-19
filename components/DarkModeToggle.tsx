import { HiSun, HiMoon } from "react-icons/hi";

const toggleVis = () => {
    const toggleContainer = document.getElementById("toggle-container")
    const modeIcon = document.getElementById("toggle-icon")
}

const DarkModeToggle = () => {
    return (
        <div id="toggle-container" className="toggle-container-hide">
            <ToggleIcon icon={<HiMoon size='55%'/>} />
        </div>
    )
};

export function ToggleIcon({ icon }) {
    return (
        <div id="toggle-icon" className="toggle-icon">
            { icon }
        </div>
    )
};

export default DarkModeToggle;