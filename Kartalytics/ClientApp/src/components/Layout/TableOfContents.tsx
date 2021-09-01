import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import Container from './Container';

type Props = {
    sections: {
        id: number;
        name: string;
    }[];
}

const TableOfContents: React.FC<Props> = ({ sections }) => {
    return (
        <Container className='max-w-sm ml-0 pb-8'>
            <h3>Contents</h3>
            <ol className='list-decimal pl-10'>
                {sections.map(s => (
                    <li key={s.id}>
                        <HashLink to={`#section-${s.id}`}>{s.name}</HashLink>
                    </li>
                ))}
            </ol>
        </Container>
    );
}

export default TableOfContents;