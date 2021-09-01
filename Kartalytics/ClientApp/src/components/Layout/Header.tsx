import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';
import * as ROUTES from '../../constants/routes';
import SearchBar from './SearchBar';

const { useState, useEffect } = React;

const Header = () => {
    const linkClasses = 'block text-center py-3 w-full md:inline md:py-0 md:w-1/5';
    const location = useLocation();
    const [navCollapsed, setNavCollapsed] = useState<boolean>(true);

    useEffect(() => {
        setNavCollapsed(true);
    }, [location, setNavCollapsed]);

    return (
        <header>
            <nav className={`bg-black border-b border-gray-600 fixed h-12 ${navCollapsed ? '' : 'h-screen'} inset-0 items-center w-full z-10 md:flex md:h-12`}>
                <div className='flex md:w-1/4'>
                    <NavLink to={ROUTES.HOME} className='font-display ml-3 my-2 text-2xl tracking-wider'>Kartalytics</NavLink>
                    <MenuIcon
                        className='h-8 w-8 md:h-6 md:w-6 my-auto ml-auto mr-3 border border-gray-400 rounded-md cursor-pointer md:hidden'
                        onClick={() => setNavCollapsed(!navCollapsed)}
                    />
                </div>

                <div className={`fixed ${navCollapsed ? 'invisible opacity-0' : 'visible opacity-100'} items-center mt-12 top-0 transition-all duration-300 w-full z-10 md:flex md:mt-0 md:opacity-100 md:py-1 md:static md:visible md:w-3/4`}>
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