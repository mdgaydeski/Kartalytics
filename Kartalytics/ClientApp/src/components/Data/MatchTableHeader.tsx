import * as React from 'react';
import TrackHeader from '../Layout/TrackHeader';
import { PLACE_LABELS } from '../../constants/constants';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    cupOrder?: number[];
    trackOrder?: number[];
}

const MatchTableHeader: React.FC<Props> = ({ cupOrder, trackOrder }) => {
    const { cups } = useContext(AppContext);

    return (
        <thead>
            { cupOrder && <tr>
                <td />
                <td />
                {cupOrder.map(cupId => {
                    const cup = cups.filter(c => c.id === cupId)[0];
                    return <td colSpan={4} key={cupId}>{cup.name}</td>
                })}
            </tr>}
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Pts</th>
                {cupOrder
                    ? <>
                        {cupOrder.map(cupId => {
                            const cup = cups.filter(c => c.id === cupId)[0];
                            return cup.tracks.map(trackId => <TrackHeader trackId={trackId} key={trackId} />);
                        })}
                    </>
                    : <>
                        {trackOrder && trackOrder.map((trackId) => <TrackHeader trackId={trackId} />)}
                    </>
                }
                {PLACE_LABELS.map((p, i) => <th scope='col' key={i}>{p}</th>)}
            </tr>
        </thead>
    );
}

export default MatchTableHeader;