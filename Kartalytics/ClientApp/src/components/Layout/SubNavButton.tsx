import * as React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
    path: string;
    children: any;
}

const SubNavButton: React.FC<Props> = ({ path, children }) => {
    return (
        <NavLink to={path}
            className='bg-gray-800 text-gray-300 cursor-pointer mx-1 py-1 rounded text-center transition-colors duration-300 hover:bg-indigo-900 hover:text-yellow-200 active:text-yellow-200 focus:text-yellow-200'
            activeClassName='bg-blue-900 text-yellow-200'
        >
            {children}
        </NavLink>
    );
}

export default SubNavButton;