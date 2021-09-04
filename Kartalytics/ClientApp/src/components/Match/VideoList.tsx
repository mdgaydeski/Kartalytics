import * as React from 'react';
import { MatchVideo } from '../../constants/types';
import { getVideoUrl } from '../../utils';

type Props = {
    videoList: MatchVideo[];
}

const VideoList: React.FC<Props> = ({ videoList }) => {
    return (
        <div className='flex-grow md:text-right'>
            Watch on:&nbsp;
            {videoList.map((v, i) => (
                <div className='inline' key={i}>
                    {i !== 0 && <> | </>}
                    <a href={getVideoUrl(v.host, v.url)} target='_blank' rel='noopener noreferrer'>
                        {v.host}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default VideoList;