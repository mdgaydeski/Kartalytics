import * as React from 'react';

type Props = {
    resetErrorBoundary: any;
}

const SiteError: React.FC<Props> = ({ resetErrorBoundary }) => {
    return (
        <>
            <h1>Error Loading Site</h1>
            <div className='flex justify-center'>
                <button
                    className='bg-green-900 my-4 px-4 py-1 rounded transition-colors duration-300 hover:bg-green-700 hover:text-yellow-100'
                    onClick={resetErrorBoundary}
                >
                    Try again
                </button>
            </div>
        </>
    );
}

export default SiteError;