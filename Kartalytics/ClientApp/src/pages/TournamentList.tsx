import * as React from 'react';
import AssetLink from '../components/Layout/AssetLink';
import { Tournament } from '../constants/types';
import AppContext from '../context/AppContext';
import { formatDate } from '../utils';

const { useState, useEffect, useContext } = React;

const TournamentList = () => {
    const { players, tournaments } = useContext(AppContext);
    const [selectedValue, setSelectedValue] = useState<number>(1);
    const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);

    useEffect(() => {
        const tournament = tournaments && tournaments.filter(t => t.id === selectedValue)[0];
        setSelectedTournament(tournament);
    }, [selectedValue, setSelectedTournament, tournaments]);

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
                    {tournaments.map(t => (
                        <option value={t.id} key={t.id}>
                            {t.name}
                        </option>
                    ))}
                </select>
                <AssetLink type='tournament' id={selectedValue}>
                    <button className='bg-blue-900 px-4 py-1 rounded text-white hover:bg-blue-7000'>
                        Select
                </button>
                </AssetLink>
            </div>
            {
                selectedTournament && <ul>
                    <li>Location: {selectedTournament.location}</li>
                    <li>Dates: {formatDate(selectedTournament.startDate)} - {formatDate(selectedTournament.endDate)}</li>
                    <li>Top finishers:
                        <ol>
                            {selectedTournament.results.slice(0, 4).map(result => (
                                <li className='ml-10' key={result.playerId}>
                                    {result.place}.&nbsp;
                                    <AssetLink type='player' id={result.playerId}>
                                        {players.filter(p => p.id === result.playerId)[0].name}
                                    </AssetLink>
                                </li>
                            ))}
                        </ol>
                    </li>
                </ul>
            }
        </>
    );
}

export default TournamentList;