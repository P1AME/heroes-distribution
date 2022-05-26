import React, { useContext } from 'react';
import HeroItem from "./HeroItem";
import { Context } from "../store/store";

function HeroesList({ title, onPress, setHero }) {

    const { state } = useContext(Context);
    console.warn(state.characters);

    let listItems = [];

    for (let aId in state.characters) {
        listItems.push(<HeroItem key={aId} onPress={onPress} char={state.characters[aId]} heroClass={state.characters[aId].classe} setHero={setHero} />)
    }

    return (
        <div>
            <h1>
                {title}
            </h1>
            <div>
                <ul style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    justifyContent : "space-between"
                }} >
                    { listItems }
                </ul>
        </div>
        </div >
    );
}

export default HeroesList;
