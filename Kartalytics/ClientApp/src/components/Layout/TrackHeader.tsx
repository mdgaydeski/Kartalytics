import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import Tooltip from '../Layout/Tooltip';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    trackId: number;
}

const TrackHeader: React.FC<Props> = ({ trackId }) => {
    const { tracks } = useContext(AppContext);
    const track = tracks.filter(t => t.id === trackId)[0];
    return (
        <th scope='col'>
            <Tooltip text={track.name}>
                <AssetLink type='track' id={track.id}>
                    {track.altNames[0]}
                </AssetLink>
            </Tooltip>
        </th>
    );
}

export default TrackHeader;