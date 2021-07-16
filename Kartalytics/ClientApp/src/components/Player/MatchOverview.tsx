import * as React from 'react';

type Props = {

}

const MatchOverview: React.FC<Props> = ({ }) => {
    return (
        <>
            <h3>Match Stats</h3>
            <ul className='list-none pl-10'>
                <li>Total matches: 99</li>
                <li>Average points: 99</li>
                <li>Max points: 99 (Virginia 2018, Play-in A)</li>
                <li>Min points: 9 (Virginia 2019, Round 1 - Match D)</li>
                <li>Overall place totals:
                    <ul className='list-disc pl-10'>
                        <li>1st: 9 (33.33%)</li>
                        <li>2nd: 9 (33.33%)</li>
                        <li>3rd: 9 (33.33%)</li>
                        <li>4th: 9 (33.33%)</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default MatchOverview;