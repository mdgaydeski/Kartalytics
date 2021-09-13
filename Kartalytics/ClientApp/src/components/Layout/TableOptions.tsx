import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { XIcon } from '@heroicons/react/outline';

const { useState, useEffect } = React;

type Props = {
    children: any;
    standalone?: boolean;
}

const TableOptions: React.FC<Props> = ({ children, standalone }) => {
    const location = useLocation();
    const [filtersCollapsed, setFiltersCollapsed] = useState<boolean>(true);

    useEffect(() => {
        setFiltersCollapsed(true);
    }, [location, setFiltersCollapsed]);

    return (
        <div className={`bg-indigo-900 flex flex-wrap items-center justify-between px-6 py-1 ${standalone ? 'rounded' : 'rounded-t'}`}>
            <button
                className='bg-blue-900 border border-blue-400 ml-auto py-1 px-6 rounded text-yellow-200 transition-colors duration-300 hover:bg-blue-700 md:hidden'
                onClick={() => setFiltersCollapsed(false)}
            >
                Filters
                </button>
            <div className={`${filtersCollapsed ? 'hidden' : 'fixed'} bg-black h-screen left-0 top-0 p-2 w-full z-50 md:contents`}>
                <XIcon className='h-8 w-8 ml-auto p-1 text-white md:hidden' onClick={() => setFiltersCollapsed(true)} />
                <h3 className='md:hidden'>Filters</h3>
                {children}
            </div>
        </div>
    );
}

export default TableOptions;