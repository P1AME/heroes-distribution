import React from 'react';
import Title from "./Title";
import HeroHeader from "./HeroHeader";
import Stats from "./Stats.js";
import { getImageApi } from '../services/heroesApi';

function HeroView({hero, setView}) {
    return (
        <div>
            <button onClick={()=>setView('list')}> &lt; </button>
            <Title title={hero.nom}/>
            <img src={"https://www.robohash.org/" + hero.classe + hero.nom}/>
            <Stats hero={hero}/>
        </div>
    );
}

export default HeroView;
