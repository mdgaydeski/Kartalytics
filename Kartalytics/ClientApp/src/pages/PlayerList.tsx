import * as React from 'react';
import AssetLink from '../components/Layout/AssetLink';
import AppContext from '../context/AppContext';

const { useContext } = React;

const PlayerList = () => {
    const { playerList } = useContext(AppContext);

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
                            <td>
                                <AssetLink type='player' id={player.id}>
                                    {player.name}
                                </AssetLink>
                            </td>
                            <td>{player.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default PlayerList;