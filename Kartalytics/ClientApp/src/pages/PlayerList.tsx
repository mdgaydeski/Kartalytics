import * as React from 'react';
import AssetLink from '../components/Layout/AssetLink';
import Container from '../components/Layout/Container';
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
            <Container className='pb-4'>
                <table className='table text-center w-full'>
                    <thead>
                        <tr>
                            <th scope='col' className='py-2'>Player</th>
                            <th scope='col' className='py-2'>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerList.map(p => (
                            <tr className='hover:bg-indigo-900' key={p.id}>
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
            </Container>
        </>
    );
}

export default PlayerList;