import * as React from 'react';
import { Link } from 'react-router-dom';
import { PLAYER } from '../../constants/routes';

type Props = {
    id: number,
    name: string
}

const PlayerLink: React.FC<Props> = ({ id, name }) => {
    return <Link to={`${PLAYER}/${id}`}>{name}</Link>
}

export default PlayerLink;