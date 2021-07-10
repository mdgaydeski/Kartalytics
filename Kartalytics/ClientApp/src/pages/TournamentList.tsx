import * as React from 'react';
import AssetLink from '../components/Layout/AssetLink';
import { Player, Tournament } from '../constants/types';
import { players } from '../tempdata/players';
import { tournaments } from '../tempdata/tournaments';
import { formatDate } from '../utils';

const { useState, useEffect } = React;

const TournamentList = () => {
    const [playerList, setPlayerList] = useState<Player[]>([]);
    const [tournamentList, setTournamentList] = useState<Tournament[]>([]);
    const [selectedValue, setSelectedValue] = useState<number>(0);
    const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);

    useEffect(() => {
        setPlayerList(players);
    }, [setPlayerList])

    useEffect(() => {
        setTournamentList(tournaments);
        setSelectedValue(1);
    }, [setTournamentList, setSelectedValue]);

    useEffect(() => {
        const tournament = tournamentList && tournamentList.filter(t => t._id === selectedValue)[0];
        setSelectedTournament(tournament);
    }, [selectedValue, setSelectedTournament, tournamentList]);

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
                        <option value={tournament._id} key={tournament._id}>
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
            {
                selectedTournament && <ul>
                    <li>Location: {selectedTournament.location}</li>
                    <li>Dates: {formatDate(selectedTournament.start_date)} - {formatDate(selectedTournament.end_date)}</li>
                    <li>Top finishers:
                        <ol>
                            {selectedTournament.finalResults.slice(0, 4).map(result => (
                                <li className='ml-10' key={result.playerId}>
                                    {result.place}.&nbsp;
                                    <AssetLink type='player' id={result.playerId}>
                                        {playerList.filter(p => p.id === result.playerId)[0].name}
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