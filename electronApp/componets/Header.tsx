import { Link } from 'react-router-dom';

const NAV_STYLES = `
    flex flex-none 
    h-[75px] w-full 
    justify-center items-center space-x-4
    p-4 
    text-black 
    border-b 
    bg-amber-100
`;

const LINK_STYLES = `
    px-2 py-2
    text-xl font-bold
    rounded
    bg-amber-200
    hover:bg-amber-300
    transition-colors
    shadow-lg
`;

export function Header() {
    return (
        <nav className={NAV_STYLES}>
            <Link to="/" className={LINK_STYLES}>
                Home
            </Link>
            <Link to="/resume-tweaks" className={LINK_STYLES}>
                Resume Tweaks
            </Link>
            <Link to="/settings" className={LINK_STYLES}>
                Settings
            </Link>
        </nav>
    );
}