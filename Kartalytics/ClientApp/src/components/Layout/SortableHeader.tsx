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
    isSelected?: boolean;
}

const SortableHeader: React.FC<Props> = ({ column, colNumber, handleClick, sortAscending, isSorted, isSelected }) => {
    const { className, invertSort, label } = column;

    return (
        <th
            scope='col'
            className={`cursor-pointer ${className} ${colNumber === 0 || isSelected ? 'table-cell' : 'hidden'} md:table-cell`}
            onClick={() => handleClick(colNumber)}
        >
            {label}
            {isSorted && (
                xor(sortAscending, !!invertSort)
                    ? <ChevronUpIcon className='h-5 w-5 inline align-top' />
                    : <ChevronDownIcon className='h-5 w-5 inline align-bottom' />
            )}
        </th>
    );
}

export default SortableHeader;