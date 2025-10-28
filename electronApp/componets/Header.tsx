import { Link } from 'react-router-dom';

const NAV_STYLES = `
    flex flex-none 
    h-[75px] w-full 
    justify-center space-x-4 
    p-4 
    text-black 
    border-b 
    bg-amber-100
`;

const BUTTON_BASE_STYLES = `
    px-2 py-2 
    text-xl font-bold 
    rounded 
    shadow-sm
`;

export function Header() {
    return (
        <nav className={NAV_STYLES}>
            <Link 
                to="/" 
                className={`${BUTTON_BASE_STYLES} 
                    bg-amber-200 
                    hover:bg-amber-300`}
            >
                Optimize
            </Link>
            <Link 
                to="/resume-tweaks" 
                className={`${BUTTON_BASE_STYLES} 
                    bg-amber-200 
                    hover:bg-amber-300`}
            >
                Resume Tweaks
            </Link>
            <Link 
                to="/settings" 
                className={`${BUTTON_BASE_STYLES} 
                    bg-amber-200 
                    hover:bg-amber-300`}
            >
                Settings
            </Link>
        </nav>
    );
}