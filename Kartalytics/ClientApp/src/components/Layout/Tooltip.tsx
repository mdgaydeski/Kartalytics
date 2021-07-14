import * as React from 'react';

const { createRef } = React;

type Props = {
    children: any;
    text: string;
}

const Tooltip: React.FC<Props> = ({ children, text }) => {
    const ref = createRef<HTMLDivElement>();
    const handleMouseEnter = () => {
        if (ref.current) {
            ref.current.style.opacity = '1';
            ref.current.style.visibility = 'visible'
        }
    }
    const handleMouseLeave = () => {
        if (ref.current) {
            ref.current.style.opacity = '0';
            ref.current.style.visibility = 'hidden'
        }
    }

    return (
        <div
            className='relative flex items-center justify-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className='absolute bg-gray-700 bottom-7 flex font-normal items-center px-2 py-1 rounded text-white transition-all duration-150 whitespace-nowrap'
                style={{ opacity: 0, visibility: 'hidden' }}
                ref={ref}
            >
                <div className='absolute bg-gray-700 h-3 w-3 left-1/2 -ml-1.5 top-6 transform rotate-45' />
                {text}
            </div>
            {children}
        </div>
    );
}

export default Tooltip;