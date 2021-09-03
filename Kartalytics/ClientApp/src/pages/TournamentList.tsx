import * as React from 'react';
import AssetLink from '../components/Layout/AssetLink';
import { TournamentCollectionType } from '../constants/types';
import AppContext from '../context/AppContext';
import { formatDate } from '../utils';

const { useState, useEffect, useContext } = React;

const TournamentList = () => {
    const { players } = useContext(AppContext);
    const [selectedValue, setSelectedValue] = useState<number>(1);
    const [selectedTournament, setSelectedTournament] = useState<TournamentCollectionType | false>(false);
    const [tournamentList, setTournamentList] = useState<TournamentCollectionType[]>([]);

    useEffect(() => {
        fetch('/api/tournaments')
            .then(response => response.json())
            .then(data => setTournamentList(data))
            //.catch(error => handleError(error));
    }, [setTournamentList])

    useEffect(() => {
        const tournament = tournamentList.length > 0 && tournamentList.filter(t => t.id === selectedValue)[0];
        setSelectedTournament(tournament);
    }, [selectedValue, setSelectedTournament, tournamentList]);

    return (
        <>
            <h1>Tournament List</h1>
            <div className='flex flex-col flex-nowrap items-center mb-4 md:block md:text-center'>
                <label htmlFor='tournament'>Select a Tournament: </label>
                <select
                    className='m-2 p-1 rounded text-black w-80 max-w-full'
                    name='tournament'
                    id='tournament'
                    onChange={e => setSelectedValue(Number(e.target.value))}
                >
                    {tournamentList.map(t => (
                        <option value={t.id} key={t.id}>
                            {t.name}
                        </option>
                    ))}
                </select>
                <AssetLink type='tournament' id={selectedValue} className='contents'>
                    <button className='bg-blue-900 py-1 rounded text-white transition-colors duration-300 w-80 max-w-full md:w-40 hover:bg-blue-700'>
                        Select
                    </button>
                </AssetLink>
            </div>
            {
                selectedTournament && <>
                    <h2>Overview</h2>
                    <ul>
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
                </>
            }
        </>
    );
}

export default TournamentList;