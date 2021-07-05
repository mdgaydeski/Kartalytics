import * as React from 'react';
import AssetLink from '../Layout/AssetLink';

const Results = () => {
    const playerList = [
        { id: 1, name: 'Arlene', place: 1 },
        { id: 2, name: 'Bret', place: 2 },
        { id: 3, name: 'Cindy', place: 3 },
        { id: 4, name: 'Dennis', place: 4 },
        { id: 5, name: 'Emily', place: 5 },
        { id: 6, name: 'Frank', place: 6 },
        { id: 7, name: 'Gert', place: 7 },
        { id: 8, name: 'Harvey', place: 8 },
        { id: 9, name: 'Irene', place: 9 },
        { id: 10, name: 'Jose', place: 10 },
        { id: 11, name: 'Katrina', place: 11 },
        { id: 12, name: 'Lee', place: 12 },
        { id: 13, name: 'Maria', place: 13 },
        { id: 14, name: 'Nate', place: 14 },
        { id: 15, name: 'Ophelia', place: 15 },
        { id: 16, name: 'Philippe', place: 16 },
        { id: 17, name: 'Rita', place: 17 },
        { id: 18, name: 'Stan', place: 18 },
        { id: 19, name: 'Tammy', place: 19 },
        { id: 20, name: 'Vince', place: 20 },
        { id: 21, name: 'Wilma', place: 21 }
    ];

    return (
        <>
            <h2>Results</h2>
            <div>
                {playerList.map(player => (
                    <p key={player.id}>
                        {player.place}.&nbsp;
                        <AssetLink type='player' id={player.id} name={player.name} />
                    </p>
                ))}
            </div>
        </>
    );
}

export default Results;