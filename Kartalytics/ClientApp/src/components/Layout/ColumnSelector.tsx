import * as React from 'react';

type Props = {
    columnLabels: string[];
    selectedColumn: number;
    callback: (id: number) => void;
}

const ColumnSelector: React.FC<Props> = ({ columnLabels, selectedColumn, callback }) => {
    return (
        <div className='grid grid-cols-2 md:hidden'>
            {columnLabels.map((col, i) => (
                <button
                    className={`${selectedColumn === i ? 'bg-blue-900 text-yellow-200' : 'bg-gray-800'} bg-gray-800 text-gray-300 cursor-pointer m-1 py-1 rounded text-center transition-colors duration-300 hover:bg-indigo-900 hover:text-yellow-200 active:text-yellow-200 focus:text-yellow-200`}
                    onClick={() => callback(i)}
                    key={i}
                >
                    {col}
                </button>
            ))}
        </div>
    );
}

export default ColumnSelector;