import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { XIcon } from '@heroicons/react/outline';
import SetFiltersButton from './SetFiltersButton';

const { useState, useEffect } = React;

type Props = {
    children: any;
    standalone?: boolean;
    setFilters: () => void;
    clearFilters: () => void;
}

const TableOptions: React.FC<Props> = ({ children, standalone, setFilters, clearFilters }) => {
    const location = useLocation();
    const [filtersCollapsed, setFiltersCollapsed] = useState<boolean>(true);

    useEffect(() => {
        setFiltersCollapsed(true);
    }, [location, setFiltersCollapsed]);

    const setAndCollapseFilters = () => {
        setFilters();
        setFiltersCollapsed(true);
    }

    const clearAndCollapseFilters = () => {
        clearFilters();
        setFiltersCollapsed(true);
    }

    return (
        <div className={`bg-indigo-900 flex flex-wrap items-center justify-between px-6 py-1 ${standalone ? 'rounded' : 'rounded-t'}`}>
            <button
                className='bg-blue-900 border border-blue-400 ml-auto py-1 px-6 rounded text-yellow-200 transition-colors duration-300 hover:bg-blue-700 md:hidden'
                onClick={() => setFiltersCollapsed(false)}
            >
                Filters
            </button>
            <div className={`${filtersCollapsed ? 'hidden' : 'fixed'} bg-black h-screen left-0 top-0 p-2 w-full z-50 md:contents`}>
                <XIcon className='cursor-pointer h-8 w-8 ml-auto p-1 text-white md:hidden' onClick={clearAndCollapseFilters} />
                <h3 className='md:hidden'>Filters</h3>
                {children}
                <div className='flex'>
                    <SetFiltersButton onClick={setAndCollapseFilters} />
                    <SetFiltersButton onClick={clearAndCollapseFilters} cancel />
                </div>
            </div>
        </div>
    );
}

export default TableOptions;