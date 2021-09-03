import * as React from 'react';
import { useParams } from 'react-router-dom';
import MatchTable from '../components/Data/MatchTable';

const Match = () => {
    // page header displayed in MatchTable
    const { id } = useParams<{ id: string }>();
    return <MatchTable matchId={Number(id)} fromDetailsPage />
}

export default Match;