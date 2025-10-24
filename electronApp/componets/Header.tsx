import { Link } from 'react-router-dom';

const NAV_STYLES = "flex-none flex h-[75px] w-full justify-center space-x-4 p-4 bg-gradient-to-r from-blue-600 to-violet-600 border-b text-black";
const BUTTON_BASE_STYLES = "px-4 py-2 rounded shadow-sm text-xl font-bold";

export function Header() {
    return (
        <nav className={NAV_STYLES}>
            <Link 
                to="/" 
                className={`${BUTTON_BASE_STYLES} bg-gradient-to-r from-emerald-400 to-cyan-400`}
            >
                Optimize
            </Link>
            <Link 
                to="/resume-tweaks" 
                className={`${BUTTON_BASE_STYLES} bg-gradient-to-r from-cyan-500 to-blue-500`}
            >
                Resume Tweaks
            </Link>
            <Link 
                to="/settings" 
                className={`${BUTTON_BASE_STYLES} bg-gradient-to-r from-fuchsia-500 to-cyan-500`}
            >
                Settings
            </Link>
        </nav>
    );
}