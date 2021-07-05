import * as React from 'react';
import { Link } from 'react-router-dom';
import { PLAYER, TOURNAMENT, TRACK } from '../../constants/routes';

type Props = {
    type: string;
    id: number;
    name: string;
}

const AssetLink: React.FC<Props> = ({ type, id, name }) => {
    let route = '';
    switch (type) {
        case 'player':
            route = PLAYER;
            break;
        case 'tournament':
            route = TOURNAMENT;
            break;
        case 'track':
            route = TRACK;
            break;
    }

    return <Link to={`${route}/${id}`}>{name}</Link>
}

export default AssetLink;