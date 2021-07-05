import * as React from 'react';
import AssetLink from '../components/Layout/AssetLink';
import { Player } from '../constants/types';
import { players } from '../tempdata/players';

const { useState, useEffect } = React;

const PlayerList = () => {
    const [playerList, setPlayerList] = useState<Player[]>([]);

    useEffect(() => {
        // fetch player list
        setPlayerList(players);
    }, [setPlayerList])

    return (
        <>
            <h1>Player List</h1>
            <table className='table text-center w-full'>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map(player => (
                        <tr key={player.id}>
                            <td><AssetLink type='player' id={player.id} name={player.name} /></td>
                            <td>{player.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default PlayerList;