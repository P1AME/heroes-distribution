import React from 'react';
import { getImageApi } from "../services/heroesApi";
import { changeView } from "../actions";

function HeroItem({ onPress, char }) {
    return (
        <div style={{ flex: 1 }}>
            <button onClick={() => { return( onPress(char), changeView() )}}>
                <div className='card' style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <img style={{ width: 70, height: 70 }}
                        source={{ uri: "https://i.pravatar.cc/70?u=" + char.id }}
                    />

                    <p style={{ alignSelf: "center" }}>{char.nom}</p>

                    <img style={{ width: 70, height: 70 }}
                        source={{ uri: getImageApi(char.classe) }}
                    />
                </div>
            </button>
        </div>
    );
}

export default HeroItem;
