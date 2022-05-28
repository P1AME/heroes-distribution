import React from 'react';
import ButtonStats from './ButtonStats';

function Stats({hero}) {
    return (
        <div>
            <ButtonStats stat={'f'} number={1} sign={'-'} char={hero}/> <p>Force : {hero.stats["force"]}</p> <ButtonStats stat={'f'} number={1} sign={'+'} char={hero}/>
            <ButtonStats stat={'i'} number={1} sign={'-'} char={hero}/> <p>Intelligence : {hero.stats["intelligence"]}</p> <ButtonStats stat={'i'} number={1} sign={'+'} char={hero}/>
            <ButtonStats stat={'a'} number={1} sign={'-'} char={hero}/> <p>Agilité : {hero.stats["agilite"]}</p> <ButtonStats stat={'a'} number={1} sign={'+'} char={hero}/>
            <ButtonStats stat={'e'} number={1} sign={'-'} char={hero}/> <p>Endurance : {hero.stats["endurance"]}</p> <ButtonStats stat={'e'} number={1} sign={'+'} char={hero}/>
        </div>
    );
}

export default Stats;
