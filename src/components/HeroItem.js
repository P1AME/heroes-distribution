import React from 'react';
import { getImageApi } from "../services/heroesApi";
import { changeView } from "../actions";

function HeroItem({ onPress, char, heroClass }) {

    return (
        <div style={{ flex: 1, height: 'auto' }} >
            <button onClick={() => { return( onPress(char), changeView() )}}>
                <div className='card' style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <img style={{ width: 70, height: 70 }}
                        src={"https://www.robohash.org/" + heroClass+char.nom}
                    />

                    <p style={{ alignSelf: "center" }}>{char.nom}</p>

                    <img style={{ width: 70, height: 70 }}
                        src={getImageApi(heroClass.toLowerCase())}
                    />
                </div>
            </button>
        </div>
    );
}

export default HeroItem;
