import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

const BackToTopLink = () => {
    return (
        <div className='p-2 text-right w-full'>
            <HashLink to='#'>Back to top</HashLink>
        </div>
    );
}

export default BackToTopLink;