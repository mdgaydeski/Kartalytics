import * as React from 'react';

const Overview = () => {
    return (
        <>
            <h2>Overview</h2>
            <ul className='list-none pl-0'>
                <li>Total Rounds played: 123</li>
                <li>Points per round:
                    <ul className='list-disc pl-10'>
                        <li>Average: 22</li>
                        <li>Max: 35 (Virginia 2018, Play-in A)</li>
                        <li>Min: 8 (Virginia 2019, Round 1 - Match D)</li>
                    </ul>
                </li>
                <li>Tournament results:
                    <ul className='list-disc pl-10'>
                        <li>Virginia 2019: 15/24</li>
                        <li>Virginia 2018: 8/22</li>
                        <li>Virginia 2017: 11/19</li>
                    </ul>
                </li>
            </ul>
        </>
    )
};

export default Overview;