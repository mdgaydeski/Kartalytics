import * as React from 'react';
import { Link } from 'react-router-dom';
import { PLAYER, TOURNAMENT, TRACK } from '../../constants/routes';

type Props = {
    type: string;
    id: number;
    children: any;
    className?: string | undefined;
}

const AssetLink: React.FC<Props> = ({ type, id, children, className }) => {
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
        default:
    }

    return <Link to={`${route}/${id}`} className={className}>{children}</Link>
}

export default AssetLink;