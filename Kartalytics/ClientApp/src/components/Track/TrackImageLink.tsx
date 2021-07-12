import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import trackSelectImage from '../../assets/trackselect.png';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    trackId: number
}

const TrackImageLink: React.FC<Props> = ({ trackId }) => {
    const track = useContext(AppContext).trackList.filter(t => t.id === trackId)[0];
    const col = (trackId - 1) % 4;
    const row = Math.floor((trackId - 1) / 4)

    return (
        <AssetLink type='track' id={trackId}>
            <div className='transform transition-transform duration-300 hover:scale-105'
                style={{
                    backgroundImage: `url(${trackSelectImage})`,
                    backgroundPosition: `${col * 33.3}% ${row * 23.17}%`,
                    backgroundSize: '400%',
                    height: '9.1vw'
            }} />
            <p className='text-center'>{track.name}</p>
        </AssetLink>
    );
}

export default TrackImageLink;