import * as React from 'react';
import { LineChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { GRAPH_LINE_PROPERTIES } from '../../constants/constants';
import { Match, MatchResult } from '../../constants/types';
import AppContext from '../../context/AppContext';
import { getProgressivePointTotals } from '../../utils';

const { useState, useEffect, useContext } = React;

type Props = {
    match: Match;
    matchResults: MatchResult[];
}

type ResultSet = {
    [key: string]: any;
}

const MatchGraph: React.FC<Props> = ({ match, matchResults }) => {
    const [graphResults, setGraphResults] = useState<ResultSet[]>([]);
    const [playerList, setPlayerList] = useState<string[]>([]);
    const { cups, players, tracks } = useContext(AppContext);

    useEffect(() => {
        const playerData = matchResults.map(r => {
            const player = players.find(p => r.playerId === p.id);
            return {
                name: player ? player.name : '',
                pointTotals: getProgressivePointTotals(r.raceResults)
            };
        }, []);

        const trackOrder = match.trackOrder ||
            (match.cupOrder?.reduce((acc, id) => {
                const cup = cups.find(c => c.id === id);
                return cup ? acc.concat(cup.tracks) : acc;
            }, [0])) || [];
        const trackNames = trackOrder.map(o => {
            const track = tracks.find(t => t.id === o);
            return track && track.altNames && track.altNames.length > 0 ? track.altNames[0] : 'ST';
        });
        const graphResults = trackNames.map((t, i) => {
            const resultSet = {
                track: t
            } as ResultSet;
            playerData.forEach(p => {
                resultSet[p.name] = p.pointTotals[i]
            });
            return resultSet;
        });

        setPlayerList(playerData.map(p => p.name));
        setGraphResults(graphResults);
    }, [cups, match, matchResults, players, setPlayerList, setGraphResults, tracks]);

    return (
        <ResponsiveContainer width='95%' height={250} className='mt-4 mx-auto'>
            <LineChart data={graphResults}>
                <CartesianGrid style={{ stroke: '#666' }} />
                <XAxis dataKey='track' style={{ fill: 'white' }} interval={window.innerWidth <= 768 ? 3 : 0} dx={-8} dy={4} />
                <YAxis style={{ fill: 'white' }} />
                <Tooltip
                    contentStyle={{ backgroundColor: '#111927', borderRadius: '0.5rem' }}
                    itemStyle={{ padding: 0 }}
                />
                <Legend />
                {playerList.map((p, i) => <Line
                    dataKey={p}
                    stroke={GRAPH_LINE_PROPERTIES[i].color}
                    strokeWidth={2}
                    dot={false}
                    key={p}
                />)}
            </LineChart>
        </ResponsiveContainer>
    );
}

export default MatchGraph;