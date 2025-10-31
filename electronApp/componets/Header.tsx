import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-white shadow">
      <nav className="flex items-center gap-6 px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800">Resume Tuner</h1>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/resume-tweaks" className="text-gray-600 hover:text-gray-900">
              Resume Tweaks
            </Link>
          </li>
          <li>
            <Link to="/settings" className="text-gray-600 hover:text-gray-900">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
