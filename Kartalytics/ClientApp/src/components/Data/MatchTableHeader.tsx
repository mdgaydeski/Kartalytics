import * as React from 'react';
import TrackHeader from '../Layout/TrackHeader';
import { PLACE_LABELS } from '../../constants/constants';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    cupOrder?: number[];
    trackOrder?: number[];
    selectedCup: number;
}

const MatchTableHeader: React.FC<Props> = ({ cupOrder, trackOrder, selectedCup }) => {
    const { cups } = useContext(AppContext);

    return (
        <thead>
            { cupOrder && <tr className='hidden md:table-row'>
                <td className='w-1/6' />
                <td />
                {cupOrder.map(cupId => {
                    const cup = cups.find(c => c.id === cupId);
                    return cup && (
                        <td colSpan={4} className='border-l border-indigo-900 pt-2' key={cupId}>
                            {cup.name}
                        </td>
                    );
                })}
                <td colSpan={4} className='border-l border-indigo-900'>Totals</td>
            </tr>}
            <tr>
                <th scope='col' className='w-2/5 pt-2 md:pt-0'>Name</th>
                <th scope='col' className='pt-2 md:pt-0'>Pts</th>
                {cupOrder
                    ? <>
                        {cupOrder.map((cupId, i) => {
                            const cup = cups.find(c => c.id === cupId);
                            return cup && cup.tracks.map((trackId, j) => (
                                <TrackHeader
                                    trackId={trackId}
                                    className={`${selectedCup === i + 1 ? 'table-cell' : 'hidden'} pt-2 md:pt-0 md:table-cell${j % 4 === 0 ? ' border-l border-indigo-900' : ''}`}
                                    key={trackId}
                                />
                            ));
                        })}
                    </>
                    : <>
                        {trackOrder && trackOrder.map((trackId) => (
                            <TrackHeader
                                trackId={trackId}
                                key={trackId}
                            />
                        ))}
                    </>
                }
                {PLACE_LABELS.map((p, i) => (
                    <th
                        scope='col'
                        className={`${selectedCup === 0 ? 'table-cell' : 'hidden'} pt-2 md:pt-0 md:table-cell${i % 4 === 0 ? ' border-l border-indigo-900' : ''}`}
                        key={i}
                    >
                        {p}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default MatchTableHeader;