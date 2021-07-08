import * as React from 'react';
import { format } from 'date-fns';
import AssetLink from '../components/Layout/AssetLink';
import { Tournament } from '../constants/types';
import { tournaments } from '../tempdata/tournaments';

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
            <div className='flex'>
                <label htmlFor='tournament'>Select a Tournament: </label>
                <select
                    className='flex-grow mx-2 rounded text-black'
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
                    <button className='bg-blue-800 px-2 rounded text-white'>
                        Select
                    </button>
                </AssetLink>
            </div>
            <ul>
                <li>Location: {location}</li>
                <li>Dates: {`${format(new Date(startDate || 0), 'dd MMM yyyy')} - ${format(new Date(endDate || 0), 'dd MMM yyyy')}`}</li>
            </ul>
        </>
    );
}

export default TournamentList;