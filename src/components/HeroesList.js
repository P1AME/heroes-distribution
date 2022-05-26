import React, { useContext } from 'react';
import HeroItem from "./HeroItem";
import { Context } from "../store/store";

function HeroesList({ title, onPress }) {

    const { state } = useContext(Context);
    console.warn(state.characters);

    let listItems = [];

    for (let aId in state.characters) {
        
        listItems.push(<HeroItem key={aId} onPress={onPress} char={state.characters[aId]} heroClass={state.characters[aId].classe} />)
    }

    return (
        <div>
            <h1>
                {title}
            </h1>
            <div style={{alignItems: 'stretch', display: 'flex', flexWrap: 'wrap'}}>
                {listItems}
            </div>
        </div>
    );
}

export default HeroesList;
