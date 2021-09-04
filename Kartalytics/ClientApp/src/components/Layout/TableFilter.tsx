import * as React from 'react';

type Props = {
    children: any
}

const TableFilter: React.FC<Props> = ({ children }) => {
    return (
        <div className='flex flex-col ml-auto mx-4 my-1 md:flex-row'>
            {children}
        </div>
    );
}

export default TableFilter;