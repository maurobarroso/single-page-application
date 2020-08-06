import React from 'react';
import { NavLink } from 'react-router-dom';

const navs = [
    {
        path: '/home',
        name: 'Home',
    },
    {
        path: '/about',
        name: 'About',
    },
    {
        path: '/contact',
        name: 'Contact',
    },
    {
        path: '/Hola',
        name: 'Hola',
    }
]

const Nav = () => (
    <nav className="bg-purple-600 p-4 text-white shadow">
        <ul className="flex space-x-6 justify-end">
            {navs.map(navItem => (
                <li>
                    <NavLink exact to={navItem.path} activeClassName=" border-b-2 border-white">
                        {navItem.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
)

export default Nav;