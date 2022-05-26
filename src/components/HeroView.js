import React from 'react';
import Title from "./Title";
import HeroHeader from "./HeroHeader";
import Stats from "./Stats.js";

function HeroView({hero}) {
    return (
        <div>
            <Title title={hero.nom}/>
            <Stats hero={hero}/>
        </div>
    );
}

export default HeroView;
