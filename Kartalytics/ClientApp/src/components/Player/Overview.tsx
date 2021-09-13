import * as React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import TournamentOverview from './TournamentOverview';
import RaceOverview from './RaceOverview';
import MatchOverview from './MatchOverview';
import YearRange from '../Filters/YearRange';
import TableOptions from '../Layout/TableOptions';
import { MatchResult, Player, PlayerOverviewFilterSet, PlayerResult, RaceResult } from '../../constants/types';

const { useState, useEffect } = React;

type Props = {
    player: Player;
}

const Overview: React.FC<Props> = ({ player }) => {
    const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
    const [raceResults, setRaceResults] = useState<RaceResult[]>([]);
    const [filteredTournamentResults, setFilteredTournamentResults] = useState<PlayerResult[]>([]);
    const [filteredMatchResults, setFilteredMatchResults] = useState<MatchResult[]>([]);
    const [filteredRaceResults, setFilteredRaceResults] = useState<RaceResult[]>([]);
    const [filters, setFilters] = useState<PlayerOverviewFilterSet>({
        startYear: 2018,
        endYear: 2020
    });
    const handleError = useErrorHandler();
    const { startYear, endYear } = filters;

    useEffect(() => {
        player && fetch(`/api/matches/player/${player.id}`)
            .then(response => response.json())
            .then(data => setMatchResults(data))
            .catch(error => handleError(error));
    }, [player, setMatchResults, handleError]);

    useEffect(() => {
        player && fetch(`/api/raceresults/player/${player.id}`)
            .then(response => response.json())
            .then(data => setRaceResults(data))
            .catch(error => handleError(error));
    }, [player, setRaceResults, handleError]);

    useEffect(() => {
        const tournamentResults = player.tournamentResults.filter(t => t.year >= startYear && t.year <= endYear);
        setFilteredTournamentResults(tournamentResults);

        const tournamentIds = tournamentResults.reduce((acc, t) => {
            const id = t.tournamentId;
            acc.indexOf(id) === -1 && acc.push(id);
            return acc;
        }, [] as number[]);
        setFilteredMatchResults(matchResults.filter(m => tournamentIds.indexOf(m.tournamentId) > -1));

        setFilteredRaceResults(raceResults.filter(r => r.year >= startYear && r.year <= endYear));
    }, [player, matchResults, raceResults, startYear, endYear, setFilteredTournamentResults,setFilteredMatchResults, setFilteredRaceResults])

    const applyFilters = (obj: any) => {
        const newFilters = { ...filters }
        for (const [key, value] of Object.entries(obj)) {
            newFilters[key] = value;
        }
        setFilters(newFilters);
    }

    return (
        <>
            <h2>Overview</h2>
            <TableOptions standalone>
                <YearRange
                    startYear={startYear}
                    endYear={endYear}
                    applyFilters={applyFilters}
                />
            </TableOptions>
            <div className='flex flex-wrap justify-around'>
                <TournamentOverview results={filteredTournamentResults} />
                <MatchOverview results={filteredMatchResults} />
                <RaceOverview results={filteredRaceResults} />
            </div>
        </>
    );
};

export default Overview;