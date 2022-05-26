import React from 'react';
import { getImageApi } from "../services/heroesApi";
import { changeView } from "../actions";

function HeroItem({ onPress, char, heroClass, setHero }) {

    return (

        <li className='align-content-around' style={{
            display: 'flex',
            padding: '1rem',
            width : "25%",
            justifyContent : "space-around"
        }}>
            <div >
                <button onClick={() => { return (setHero(char), onPress('char')) }}>
                    <div className='card' style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderRadius: '0.25rem',
                        boxShadow: '0 20px 40px -14px rgba(0, 0, 0, 0.25)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        width : "100%"
                    }}>
                        <img style={{ width: 70, height: 70 }}
                            src={"https://www.robohash.org/" + heroClass + char.nom}
                        />

                        <p style={{ alignSelf: "center", display : 'flex'}}>{char.nom}</p>

                        <img style={{ width: 70, height: 70 }}
                            src={getImageApi(heroClass.toLowerCase())}
                        />
                    </div>
                </button>
            </div>
        </li>
    );
}

export default HeroItem;
