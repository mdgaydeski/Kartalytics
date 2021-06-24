import * as React from 'react';

const { useState } = React;

type Props = {
    children: any;
    className: string;
}

const SearchBar: React.FC<Props> = ({ children, className }) => {
    const [searchText, setSearchText] = useState<string>('');

    return (
        <>
            <input
                className={`mx-1 px-2 py-1.5 rounded text-black ${className}`}
                type='search'
                value={searchText}
                placeholder='Search'
                aria-label='search'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
            />
            {children}
        </>
    );
}

export default SearchBar;