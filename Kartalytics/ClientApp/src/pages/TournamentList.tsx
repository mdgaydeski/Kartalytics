import * as React from 'react';
import AssetLink from '../components/Layout/AssetLink';
import { Tournament } from '../constants/types';
import { tournaments } from '../tempdata/tournaments';
import { formatDate } from '../utils';

const { useState, useEffect } = React;

const TournamentList = () => {
    const [tournamentList, setTournamentList] = useState<Tournament[]>([]);
    const [selectedValue, setSelectedValue] = useState<number>(0);

    useEffect(() => {
        setTournamentList(tournaments);
        setSelectedValue(1);
    }, [setTournamentList, setSelectedValue]);

    const { location, startDate, endDate } = tournamentList.filter(t => t.id === selectedValue)[0] || {};


    return (
        <>
            <h1>Tournament List</h1>
            <div className='flex items-center mb-4'>
                <label htmlFor='tournament'>Select a Tournament: </label>
                <select
                    className='flex-grow mx-2 p-1 rounded text-black'
                    name='tournament'
                    id='tournament'
                    onChange={e => setSelectedValue(Number(e.target.value))}
                >
                    {tournamentList.map(tournament => (
                        <option value={tournament.id} key={tournament.id}>
                            {tournament.name}
                        </option>
                    ))}
                </select>
                <AssetLink type='tournament' id={selectedValue}>
                    <button className='bg-blue-900 px-4 py-1 rounded text-white hover:bg-blue-7000'>
                        Select
                    </button>
                </AssetLink>
            </div>
            <ul>
                <li>Location: {location}</li>
                <li>Dates: {formatDate(startDate)} - {formatDate(endDate)}</li>
            </ul>
        </>
    );
}

export default TournamentList;