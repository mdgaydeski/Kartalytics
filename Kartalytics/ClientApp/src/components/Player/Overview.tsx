import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { Player } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    player: Player;
}

const Overview: React.FC<Props> = ({ player }) => {
    const { tournamentList } = useContext(AppContext);

    return (
        <>
            <h2>Overview</h2>
            <ul className='list-none pl-0'>
                <li>Total matches played: 999</li>
                <li>Points per round:
                    <ul className='list-disc pl-10'>
                        <li>Average: 99</li>
                        <li>Max: 99 (Virginia 2018, Play-in A)</li>
                        <li>Min: 9 (Virginia 2019, Round 1 - Match D)</li>
                    </ul>
                </li>
                <li>Tournament results:
                    <ul className='list-disc pl-10'>
                        {player.tournamentResults.map(result => {
                            const tournament = tournamentList.filter(t => t._id === result.tournamentId)[0];
                            return (
                                <li key={result.tournamentId}>
                                    <AssetLink type='tournament' id={result.tournamentId}>
                                        {tournament.name}
                                    </AssetLink>
                                    : {result.place}/{tournament.finalResults.length}
                                </li>
                            )
                        })}
                    </ul>
                </li>
            </ul>
        </>
    )
};

export default Overview;