import * as React from 'react';

type Props = {
    onClick: () => void;
    cancel?: boolean;
}

const SetFiltersButton: React.FC<Props> = ({ onClick, cancel }) => {
    return (
        <button
            className={`${cancel ? 'bg-red-900 hover:bg-red-700 md:hidden' : 'bg-green-900 hover:bg-green-700'} flex-grow mx-4 px-4 py-1 rounded transition-colors duration-300`}
            onClick={onClick}
        >
            {cancel ? 'Cancel' : 'Apply'}
        </button>
    )
}

export default SetFiltersButton;