import * as React from 'react';

type Props = {
    children: any
}

const TableOptions: React.FC<Props> = ({ children }) => {
    return (
        <div className='bg-indigo-900 flex items-center justify-end px-6 py-2 space-x-4 rounded-t'>
            {children}
        </div>
    );
}

export default TableOptions;