import React, { useContext } from 'react';
import HeroItem from "./HeroItem";
import { Context } from "../store/store";

function HeroesList({ title, onPress }) {

    const { state } = useContext(Context);
    console.warn(state.characters);

    let listItems = [];

    for (let aId in state.characters) {
        listItems.push(<HeroItem key={state.characters[id]} onPress={onPress} char={state.characters[id]} />)
    }

    return (
        <div>
            <h1>
                {title}
            </h1>
            <div style={"overflow-y: scroll; height:400px;"}>
                {listItems}
            </div>
        </div>
    );
}

export default HeroesList;
