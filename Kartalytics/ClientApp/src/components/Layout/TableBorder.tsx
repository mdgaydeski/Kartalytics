import * as React from 'react';

type Props = {
    children: any
}

const TableBorder: React.FC<Props> = ({ children }) => {
    return (
        <div className='border border-indigo-900 rounded-lg'>
            {children}
        </div>
    );
}

export default TableBorder;