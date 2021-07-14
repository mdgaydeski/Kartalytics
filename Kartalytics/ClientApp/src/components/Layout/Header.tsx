import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';
import * as ROUTES from '../../constants/routes';
import SearchBar from './SearchBar';

const { useState } = React;

const Header = () => {
    const linkClasses = 'block text-center py-3 w-full md:inline md:py-0 md:w-1/5';

    const [navCollapsed, setNavCollapsed] = useState<boolean>(true);

    return (
        <header>
            <nav className={`bg-black bg-opacity-90 border-b border-gray-600 ${navCollapsed ? 'h-auto' : 'absolute h-screen'} inset-0 items-center w-full md:flex md:h-auto md:static`}>
                <div className='flex md:w-1/4'>
                    <NavLink to={ROUTES.HOME} className='font-display ml-3 text-3xl md:text-2xl'>Kartalytics</NavLink>
                    <MenuIcon
                        className='h-8 w-8 md:h-6 md:w-6 my-auto ml-auto mr-3 border border-gray-400 rounded-md cursor-pointer md:hidden'
                        onClick={() => setNavCollapsed(!navCollapsed)}
                    />
                </div>

                <div className={`absolute bg-black bg-opacity-90 ${navCollapsed ? 'invisible opacity-0' : 'visible opacity-100'} items-center mt-9 top-0 transition-all duration-300 w-full z-10 md:flex md:mt-0 md:opacity-100 md:py-1 md:static md:visible md:w-3/4`}>
                    <NavLink to={ROUTES.PLAYER_LIST} className={linkClasses}>Players</NavLink>
                    <NavLink to={ROUTES.TOURNAMENT_LIST} className={linkClasses}>Tournaments</NavLink>
                    <NavLink to={ROUTES.TRACK_LIST} className={linkClasses}>Tracks</NavLink>

                    <div className='text-center w-full md:w-2/5'>
                        <SearchBar className='my-1 w-11/12'>
                        </SearchBar>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;