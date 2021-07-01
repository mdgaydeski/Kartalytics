import * as React from 'react';
import BracketRoundResults from '../Data/BracketRoundResults';
import PoolRoundResults from '../Data/PoolRoundResults';

const Bracket = () => {
    return (
        <>
            <h2>Bracket</h2>
            <div className='flex flex-wrap justify-around w-full'>
                <PoolRoundResults />
                <BracketRoundResults />
            </div>
        </>
    );
}

export default Bracket;