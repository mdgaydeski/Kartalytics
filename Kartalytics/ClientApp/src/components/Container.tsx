import * as React from 'react';

type Props = {
    children: any;
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className='bg-black bg-opacity-90 border border-gray-600 my-8 mx-auto px-4 pb-4 rounded-xl shadow-rainbow w-3/4'>
            {children}
        </div>
    ); 
}

export default Container;