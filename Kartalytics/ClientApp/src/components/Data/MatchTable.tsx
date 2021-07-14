import * as React from 'react';
import MatchRow from './MatchRow';
import AssetLink from '../Layout/AssetLink';
import TableBorder from '../Layout/TableBorder';
import Tooltip from '../Layout/Tooltip';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    matchId: number;
    playerId: number
}

const MatchTable: React.FC<Props> = ({ matchId, playerId }) => {
    const { matchList, trackList } = useContext(AppContext);
    const match = matchList.filter(m => m.id === matchId)[0];

    const getTrackHeaders = (trackArray: number[]) => {
        return trackArray.map((trackId, i) => {
            const track = trackList.filter(t => t.id === trackId)[0];
            return (
                <th scope='col' key={i}>
                    <Tooltip text={track.name}>
                        <AssetLink type='track' id={track.id}>
                            {track.altNames[0]}
                        </AssetLink>
                    </Tooltip>
                </th>
            );
        });
    }

    return (
        <>
            <h4>{match.name}</h4>
            <TableBorder>
                <table className='my-1 table-fixed text-center w-full'>
                    <colgroup>
                        <col className='w-4/5' />
                        <col span={match.trackOrder.length + match.results.length + 1} className='w-1/5' />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Pts</th>
                            {getTrackHeaders(match.trackOrder)}
                            <th scope='col'>#1</th>
                            <th scope='col'>#2</th>
                            <th scope='col'>#3</th>
                            <th scope='col'>#4</th>
                        </tr>
                    </thead>
                    <tbody>
                        {match.results.map(result => (
                            <MatchRow result={result} highlight={result.playerId === playerId} key={result.playerId} />
                        ))}
                    </tbody>
                </table>
            </TableBorder>
        </>
    );

}

export default MatchTable;