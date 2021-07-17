import * as React from 'react';
import { useLocation } from 'react-router-dom';
import AssetLink from './AssetLink';
import { SearchItem } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useState, useEffect, useContext, createRef } = React;

type Props = {
    className: string;
}

const SearchBar: React.FC<Props> = ({ className }) => {
    const [searchText, setSearchText] = useState<string>('');
    const [searchItems, setSearchItems] = useState<SearchItem[]>([]);
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    const { players, tournaments, tracks } = useContext(AppContext);
    const { pathname } = useLocation();
    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        const items = players.map(p => ({
            type: 'Player',
            id: p.id,
            name: p.name,
            altNames: [] as string[]
        })).concat(tournaments.map(t => ({
            type: 'Tournament',
            id: t.id,
            name: t.name,
            altNames: t.altNames
        }))).concat(tracks.map(t => ({
            type: 'Track',
            id: t.id,
            name: t.name,
            altNames: t.altNames
        })))
        setSearchItems(items);
    }, [players, tournaments, tracks, setSearchItems]);

    const showResults = () => {
        if (ref.current) {
            ref.current.style.opacity = '1';
            ref.current.style.visibility = 'visible'
        }
    }

    const hideResults = () => {
        if (ref.current) {
            ref.current.style.opacity = '0';
            ref.current.style.visibility = 'hidden'
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value.toLowerCase().trim();
        const results = text.length >= 2
            ? searchItems.filter(item => item.name.toLowerCase().indexOf(text) > -1
                || item.altNames.some(alt => alt.toLowerCase().indexOf(text) > -1))
                .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            : []

        results.length > 0 ? showResults() : hideResults();
        setSearchText(e.target.value);
        setSearchResults(results);
    }

    useEffect(() => {
        setSearchText('');
        setSearchResults([]);
    }, [pathname, setSearchText, setSearchResults]);

    return (
        <>
            <input
                className={`mx-1 px-2 py-1.5 rounded text-black ${className}`}
                type='search'
                value={searchText}
                placeholder='Search'
                aria-label='search'
                onChange={handleChange}
                onBlur={() => setTimeout(() => hideResults(), 50)}
                onFocus={showResults}
            />
            <div
                className='absolute bg-gray-700 mx-1/24 my-1 rounded w-11/12 transition-all duration-300 md:mx-1.25pct md:w-27.5pct'
                style={{ opacity: 0, visibility: 'hidden' }}
                ref={ref}
            >
                {searchResults.length > 0 && (
                    <>
                        <div className='absolute bg-gray-700 h-3 w-3 ml-3 -top-1.5 transform rotate-45 z-0' />
                        <div className='relative z-10'>
                            {searchResults.map((result, i) => (
                                <div className='px-2 py-1 transition-colors duration-300 hover:bg-gray-600 first:rounded-t last:rounded-b' key={i}>
                                    <AssetLink type={result.type.toLowerCase()} id={result.id}>
                                        <div className='flex justify-between'>
                                            <p className='font-bold'>{result.name}</p>
                                            <p className='text-white'>{result.type}</p>
                                        </div>
                                    </AssetLink>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default SearchBar;