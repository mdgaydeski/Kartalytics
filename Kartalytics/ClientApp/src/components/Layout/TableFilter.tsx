import * as React from 'react';

type Props = {
    children: any
}

const TableFilter: React.FC<Props> = ({ children }) => {
    return (
        <div className='flex ml-auto my-1 space-x-2'>
            {children}
        </div>
    );
}

export default TableFilter;