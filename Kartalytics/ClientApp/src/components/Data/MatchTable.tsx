import * as React from 'react';
import MatchRow from './MatchRow';
import { } from '../../constants/types';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    matchId: number;
}

const MatchTable: React.FC<Props> = ({ matchId }) => {
    const { matchList, trackList } = useContext(AppContext);
    const match = matchList.filter(m => m.id === matchId)[0];

    const getTrackHeaders = (trackArray: number[]) => {
        return trackArray.map((trackId, i) => (
            <th key={i}>
                {trackList.filter(t => t.id === trackId)[0].altNames[0]}
            </th>
        ));
    }

    return (
        <>
            <h4>{match.name}</h4>
            <table className='text-center w-full'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Pts</th>
                        {getTrackHeaders(match.trackOrder)}
                        <th>#1s</th>
                        <th>#2s</th>
                        <th>#3s</th>
                        <th>#4s</th>
                    </tr>
                </thead>
                <tbody>
                    {match.results.map(result => <MatchRow result={result} key={result.playerId} />)}
                </tbody>
            </table>
        </>
    );

}

export default MatchTable;