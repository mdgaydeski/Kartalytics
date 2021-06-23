import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/outline';
import * as ROUTES from '../../constants/routes';

const Header = () => {
    return (
        <header>
            <nav className='flex bg-black bg-opacity-90'>
                <NavLink to={ROUTES.HOME} className='font-display ml-3 text-2xl w-1/4'>Kartalytics</NavLink>
                <MenuIcon className='h-6 w-6 my-auto ml-auto mr-3 border border-gray-400 rounded-md cursor-pointer md:hidden' />
                <div className='hidden md:flex md:w-3/4'>
                    <NavLink to={ROUTES.PLAYER_LIST} className='my-auto text-center w-1/4'>Players</NavLink>
                    <NavLink to={ROUTES.TOURNAMENT_LIST} className='my-auto text-center w-1/4'>Tournaments</NavLink>
                    <NavLink to={ROUTES.TRACK_LIST} className='my-auto text-center w-1/4'>Tracks</NavLink>
                    <div className='my-auto w-1/4'>
                        <SearchIcon className='h-6 w-6 ml-auto mr-3 border border-gray-400 rounded-md cursor-pointer' />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;