import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import { TournamentResult } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    results: TournamentResult[];
}

const Results: React.FC<Props> = ({ results }) => {
    const { playerList } = useContext(AppContext);

    return (
        <>
            <h2>Results</h2>
            <div>
                {results.map(result => (
                    <p key={result.playerId}>
                        {result.place}.&nbsp;
                        <AssetLink type='player' id={result.playerId}>
                            {playerList.filter(p => p.id === result.playerId)[0].name}
                        </AssetLink>
                    </p>
                ))}
            </div>
        </>
    );
}

export default Results;