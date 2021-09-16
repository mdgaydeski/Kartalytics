import * as React from 'react';
import AssetLink from '../Layout/AssetLink';
import trackSelectImage from '../../assets/trackselect.png';
import AppContext from '../../context/AppContext';

const { useContext } = React;

type Props = {
    trackId: number
}

const TrackImageLink: React.FC<Props> = ({ trackId }) => {
    const track = useContext(AppContext).tracks.find(t => t.id === trackId);
    const col = (trackId - 1) % 4;
    const row = Math.floor((trackId - 1) / 4)

    return track
        ? (
            <AssetLink type='track' id={trackId}>
                <div className='h-25.2vw md:h-12.6vw md:max-h-36 transform transition-transform duration-300 hover:scale-105'
                    style={{
                        backgroundImage: `url(${trackSelectImage})`,
                        backgroundPosition: `${col * 33.3}% ${row * 23.17}%`,
                        backgroundSize: '400%'
                }} />
                <p className='text-center'>{track.name}</p>
            </AssetLink>
        )
        : <></>
}

export default TrackImageLink;