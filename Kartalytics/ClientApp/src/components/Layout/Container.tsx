import * as React from 'react';

type Props = {
    children: any;
    className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`bg-black border border-indigo-900 mx-auto mt-2 mb-12 rounded-lg shadow-rainbow${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    );
}

export default Container;