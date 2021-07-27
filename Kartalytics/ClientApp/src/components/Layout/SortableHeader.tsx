import * as React from 'react';
import { ChevronUpIcon, ChevronDownIcon, SelectorIcon } from '@heroicons/react/solid';
import { TrackStatsColumnType } from '../../constants/types';

type Props = {
    column: TrackStatsColumnType;
    colNumber: number;
    setProperty: (key: string, value: number) => void;
    isSorted?: boolean;
}

const SortableHeader: React.FC<Props> = ({ column, colNumber, setProperty, isSorted }) => {
    const { className, invertSort, label, sortAscending } = column;

    return (
        <th
            scope='col'
            className={`cursor-pointer ${className}`}
            onClick={() => setProperty('sortedColumn', colNumber)}
        >
            {label}
            {isSorted
                ? sortAscending && !invertSort
                    ? <ChevronUpIcon className='h-5 w-5 inline align-top' />
                    : <ChevronDownIcon className='h-5 w-5 inline align-bottom' />
                : <SelectorIcon className='h-5 w-5 inline align-text-bottom' />
            }
        </th>
    );
}

export default SortableHeader;