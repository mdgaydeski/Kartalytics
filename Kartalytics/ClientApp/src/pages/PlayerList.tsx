import * as React from 'react';
import AssetLink from '../components/Layout/AssetLink';
import { Player } from '../constants/types';
import AppContext from '../context/AppContext';
import { comparePlayersByName } from '../utils';

const { useState, useEffect, useContext } = React;

const PlayerList = () => {
    const [playerList, setPlayerList] = useState<Player[]>([]);
    const { players } = useContext(AppContext);
    
    useEffect(() => {
        setPlayerList(players.sort(comparePlayersByName));
    }, [players, setPlayerList]);

    return (
        <>
            <h1>Player List</h1>
            <table className='table text-center w-full'>
                <thead>
                    <tr>
                        <th scope='col'>Player</th>
                        <th scope='col'>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map(p => (
                        <tr key={p.id}>
                            <td>
                                <AssetLink type='player' id={p.id}>
                                    {p.name}
                                </AssetLink>
                            </td>
                            <td>{p.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default PlayerList;