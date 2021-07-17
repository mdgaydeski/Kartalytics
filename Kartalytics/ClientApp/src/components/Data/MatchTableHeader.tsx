import * as React from 'react';
import TrackHeader from '../Layout/TrackHeader';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    cupOrder?: number[] | undefined;
    trackOrder?: number[] | undefined;
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
                        {trackOrder && trackOrder.map((trackId, i) => <TrackHeader trackId={trackId} />)}
                    </>
                }
                <th scope='col'>#1</th>
                <th scope='col'>#2</th>
                <th scope='col'>#3</th>
                <th scope='col'>#4</th>
            </tr>
        </thead>
    );
}

export default MatchTableHeader;