import * as React from 'react';
import MatchRow from './MatchRow';


const MatchTable = () => {

    const tracks = ['LR', 'MF', 'KB', 'KD', 'TT', 'FS', 'CM', 'MR', 'WS', 'SL', 'Ry', 'BC', 'DK', 'YV', 'BB', 'Rd'];
    const sampleMatch = {
        name: 'Match A',
        trackOrder: [1, 2, 3, 4, 13, 14, 15, 16, 9, 10, 11, 12, 5, 6, 7, 8],
        players: [
            {
                id: 1,
                name: 'Zoran',
                country: '',
                results: [2, 1, 3, 1, 1, 3, 1, 1, 1, 2, 3, 2, 1, 1, 2, 1]
            },
            {
                id: 2,
                name: 'Weatherton',
                country: '',
                results: [1, 4, 1, 2, 2, 1, 2, 2, 2, 1, 1, 3, 3, 4, 3, 3]
            },
            {
                id: 3,
                name: 'Andy',
                country: '',
                results: [3, 3, 2, 3, 3, 2, 3, 3, 4, 3, 2, 1, 2, 2, 4, 2]
            },
            {
                id: 4,
                name: 'Trash Cat',
                country: '',
                results: [4, 2, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 1, 4]
            }
        ]
    };

    const getTrackHeaders = (trackArray: number[]) => {
        return trackArray.map((t, i) => (
            <th key={i}>{tracks[t - 1]}</th>
        ));
    }

    return (
        <>
            <h4>{sampleMatch.name}</h4>
            <table className='text-center w-full'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Pts</th>
                        {getTrackHeaders(sampleMatch.trackOrder)}
                        <th>#1s</th>
                        <th>#2s</th>
                        <th>#3s</th>
                        <th>#4s</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleMatch.players.map(player => <MatchRow player={player} key={player.id} />)}
                </tbody>
            </table>
        </>
    );

}

export default MatchTable;