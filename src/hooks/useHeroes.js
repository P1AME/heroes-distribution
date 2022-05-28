import React, { useEffect, useReducer, useState } from "react";
import { defaultState, reducer } from "../reducer";
import { addPointToHero, remPointToHero, getAllHeroesApi } from "../services/heroesApi";
import { setChar, statsPlus, statsMinus } from "../actions";

export function useHeroes() {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [isReady, setIsReady] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const promises = []
        promises[0] = getAllHeroesApi()
            .then((data) => {
                dispatch(setChar(data))
            })
        Promise.all(promises).then(() => setIsReady(true))
    }, []);



    const onPlus = (character, stat, number) => {

        setLoading(true);

        addPointToHero(character, stat, number)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(statsPlus(character, stat, number))
                    setLoading(false);
                } else console.warn("An error occured, please retry");
            });

    }

    const onMinus = (character, stat, number) => {

        setLoading(true);

        remPointToHero(character, stat, number)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(statsMinus(character, stat, number))
                    setLoading(false);
                } else console.warn("An error occured, please retry");
            });

    }








    return { state, dispatch, isReady, isLoading, onPlus, onMinus };


}
