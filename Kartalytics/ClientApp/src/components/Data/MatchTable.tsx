import * as React from 'react';
import MatchRow from './MatchRow';
import AssetLink from '../Layout/AssetLink';
import TableBorder from '../Layout/TableBorder';
import TableOptions from '../Layout/TableOptions';
import Tooltip from '../Layout/Tooltip';
import AppContext from '../../context/AppContext';

const { useState, useContext } = React;

type Props = {
    matchId: number;
    playerId: number
}

const MatchTable: React.FC<Props> = ({ matchId, playerId }) => {
    const [highlightPlace, setHighlightPlace] = useState<number>(0);
    const { matches, tracks } = useContext(AppContext);
    const match = matches.filter(m => m.id === matchId)[0];
    match.results.sort((a, b) => b.points - a.points);

    const getTrackHeaders = (trackArray: number[]) => {
        return trackArray.map((trackId, i) => {
            const track = tracks.filter(t => t.id === trackId)[0];
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
                <TableOptions>
                    <p>Highlight position:</p>
                    <div className='space-x-1'>
                        <input
                            type='radio'
                            id={`highlight-none-${matchId}`}
                            name={`highlight-${matchId}`}
                            value='0'
                            checked={highlightPlace === 0}
                            onChange={() => setHighlightPlace(0)}
                        />
                        <label htmlFor='highlight-none'>None</label>
                    </div>
                    <div className='space-x-1'>
                        <input
                            type='radio'
                            id={`highlight-1-${matchId}`}
                            name={`highlight-${matchId}`}
                            value='1'
                            checked={highlightPlace === 1}
                            onChange={() => setHighlightPlace(1)}
                        />
                        <label htmlFor='highlight-1'>1</label>
                    </div>
                    <div className='space-x-1'>
                        <input
                            type='radio'
                            id={`highlight-2-${matchId}`}
                            name={`highlight-${matchId}`}
                            value='2'
                            checked={highlightPlace === 2}
                            onChange={() => setHighlightPlace(2)}
                        />
                        <label htmlFor='highlight-2'>2</label>
                    </div>
                    <div className='space-x-1'>
                        <input
                            type='radio'
                            id={`highlight-3-${matchId}`}
                            name={`highlight-${matchId}`}
                            value='3'
                            checked={highlightPlace === 3}
                            onChange={() => setHighlightPlace(3)}
                        />
                        <label htmlFor='highlight-3'>3</label>
                    </div>
                    <div className='space-x-1'>
                        <input
                            type='radio'
                            id={`highlight-4-${matchId}`}
                            name={`highlight-${matchId}`}
                            value='4'
                            checked={highlightPlace === 4}
                            onChange={() => setHighlightPlace(4)}
                        />
                        <label htmlFor='highlight-4'>4</label>
                    </div>
                </TableOptions>
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
                            <MatchRow
                                result={result}
                                highlightPlace={highlightPlace}
                                highlightPlayer={result.playerId === playerId}
                                key={result.playerId}
                            />
                        ))}
                    </tbody>
                </table>
            </TableBorder>
        </>
    );

}

export default MatchTable;