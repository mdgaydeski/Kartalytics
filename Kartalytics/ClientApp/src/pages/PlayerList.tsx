import * as React from 'react';
import AssetLink from '../components/Layout/AssetLink';
import AppContext from '../context/AppContext';

const { useContext } = React;

const PlayerList = () => {
    const { players } = useContext(AppContext);

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
                    {players.map(p => (
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