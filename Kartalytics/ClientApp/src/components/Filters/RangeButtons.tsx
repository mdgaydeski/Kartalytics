import * as React from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';

type Props = {
    handleClick: (changeValue: number) => void;
}

const RangeButtons: React.FC<Props> = ({ handleClick }) => {
    return (
        <div className='md:hidden'>
            <button className='mx-1'>
                <PlusIcon
                    className='bg-blue-900 h-7 w-7 p-1 rounded text-yellow-200'
                    onClick={() => handleClick(1)}
                />
            </button>
            <button className='mx-1'>
                <MinusIcon
                    className='bg-blue-900 h-7 w-7 p-1 rounded text-yellow-200'
                    onClick={() => handleClick(-1)}
                />
            </button>
        </div>
    );
}

export default RangeButtons;