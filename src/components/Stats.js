import React from 'react';

function Stats({hero}) {
    return (
        <div>
            <p>Force : {hero.stats["force"]}</p>
            <p>Intelligence : {hero.stats["intelligence"]}</p>
            <p>Agilité : {hero.stats["agilite"]}</p>
            <p>endurance : {hero.stats["endurance"]}</p>
        </div>
    );
}

export default Stats;
