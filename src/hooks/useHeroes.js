import React, {useEffect, useReducer, useState} from "react";
import {defaultState, reducer} from "../reducer";
import {getAllHeroesApi} from "../services/heroesApi";
import {setChar} from "../actions";

export function useHeroes() {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const promises = []
        promises[0] = getAllHeroesApi()
            .then((data) =>{
                dispatch(setChar(data))
            })
        Promise.all(promises).then(() => setIsReady(true))
    }, []);

    return {state, dispatch, isReady};

}
