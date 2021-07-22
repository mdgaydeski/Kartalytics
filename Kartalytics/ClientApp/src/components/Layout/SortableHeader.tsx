import * as React from 'react';
import { TrackStatsColumnType } from '../../constants/types';

type Props = {
    column: TrackStatsColumnType;
    colNumber: number;
    setProperty: (key: string, value: number) => void;
}

const SortableHeader: React.FC<Props> = ({ column, colNumber, setProperty }) => {
    const { className, label } = column;

    return (
        <th
            scope='col'
            className={`cursor-pointer ${className}`}
            onClick={() => setProperty('sortedColumn', colNumber)}
        >
            {label}
        </th>
    );
}

export default SortableHeader;