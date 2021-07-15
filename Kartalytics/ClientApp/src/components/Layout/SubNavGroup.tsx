import * as React from 'react';

type Props = {
    children: any;
}

const SubNavGroup: React.FC<Props> = ({ children }) => {
    return (
        <div className='grid grid-flow-col auto-cols-fr mx-auto w-11/12 md:w-3/4'>
            {children}
        </div>
    );
}

export default SubNavGroup;