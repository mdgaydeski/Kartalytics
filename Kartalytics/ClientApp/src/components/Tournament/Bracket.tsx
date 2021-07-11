import * as React from 'react';
import RoundResults from '../Data/RoundResults';
import { TournamentRound } from '../../constants/types';

type Props = {
    rounds: TournamentRound[];
}

const Bracket: React.FC<Props> = ({ rounds }) => {
    return (
        <>
            <h2>Bracket</h2>
            <div className='flex flex-wrap justify-around w-full'>
                {rounds.map(round => <RoundResults round={round} key={round.orderNumber} />)}
            </div>
        </>
    );
}

export default Bracket;