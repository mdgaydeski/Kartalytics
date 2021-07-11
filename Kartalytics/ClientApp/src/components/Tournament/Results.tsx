import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import AppContext from '../../context/AppContext';

const { useContext } = React;

const Results = () => {
    const { playerList, tournamentList } = useContext(AppContext);
    const finalResults = tournamentList[0].finalResults;

    return (
        <>
            <h2>Results</h2>
            <div>
                {finalResults.map(result => (
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