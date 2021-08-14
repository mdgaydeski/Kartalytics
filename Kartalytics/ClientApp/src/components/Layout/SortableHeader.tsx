import * as React from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { TrackStatsColumnType } from '../../constants/types';
import { xor } from '../../utils';

type Props = {
    column: TrackStatsColumnType;
    colNumber: number;
    handleClick: (value: number) => void;
    sortAscending: boolean;
    isSorted?: boolean;
}

const SortableHeader: React.FC<Props> = ({ column, colNumber, handleClick, sortAscending, isSorted }) => {
    const { className, invertSort, label, labelAbbr } = column;

    return (
        <th
            scope='col'
            className={`cursor-pointer ${className}`}
            onClick={() => handleClick(colNumber)}
        >
            <span className='lg:hidden'>{labelAbbr ? labelAbbr : label}</span>
            <span className='hidden lg:inline'>{label}</span>
            {isSorted && (
                xor(sortAscending, !!invertSort)
                    ? <ChevronUpIcon className='h-5 w-5 inline align-top' />
                    : <ChevronDownIcon className='h-5 w-5 inline align-bottom' />
            )}
        </th>
    );
}

export default SortableHeader;