import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import trackSelectImage from '../../assets/trackselect.png';
import { Track } from '../../constants/types';


type Props = {
    track: Track
}

const TrackImageLink: React.FC<Props> = ({ track }) => {
    const col = (track.id - 1) % 4;
    const row = Math.floor((track.id - 1) / 4)

    return (
        <AssetLink type='track' id={track.id}>
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