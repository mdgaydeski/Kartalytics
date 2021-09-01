import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

const BackToTopLink = () => {
    return (
        <div className='mx-auto p-2 text-right'>
            <HashLink to='#'>Back to top</HashLink>
        </div>
    );
}

export default BackToTopLink;