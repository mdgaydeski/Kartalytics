import * as React from 'react';

type Props = {

}

const RaceOverview: React.FC<Props> = ({ }) => {
    return (
        <>
            <h3>Race Stats</h3>
            <ul className='list-none pl-10'>
                <li>Total races: 999</li>
                <li>Average finish: 9.999</li>
                <li>Place totals:
                    <ul className='list-disc pl-10'>
                        <li>1st: 99 (33.33%)</li>
                        <li>2nd: 99 (33.33%)</li>
                        <li>3rd: 99 (33.33%)</li>
                        <li>4th: 99 (33.33%)</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default RaceOverview;