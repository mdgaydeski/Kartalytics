import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

type Props = {
    sections: {
        id: number;
        name: string;
    }[];
}

const TableOfContents: React.FC<Props> = ({ sections }) => {
    return (
        <>
            <h3>Contents</h3>
            <ol className='list-decimal ml-10'>
                {sections.map(s => (
                    <li key={s.id}>
                        <HashLink to={`#section-${s.id}`}>{s.name}</HashLink>
                    </li>
                ))}
            </ol>
        </>
    );
}

export default TableOfContents;