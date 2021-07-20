import * as React from 'react';

type Props = {
    children: any
}

const TableOptions: React.FC<Props> = ({ children }) => {
    return (
        <div className='bg-indigo-900 flex flex-wrap items-center justify-between px-6 py-1 rounded-t'>
            {children}
        </div>
    );
}

export default TableOptions;