import React from "react";
import { statMinus, statPlus } from "../actions";
import { useHeroes } from "../hooks/useHeroes";
import { addPointToHero, remPointToHero } from "../services/heroesApi";


function ButtonStats({sign, char, stat, number}){

    const {onMinus, onPlus} = useHeroes();

    if(sign === '-') return <button onClick={() => onMinus(char, stat, number)}> <strong>-</strong> </button>
    else if(sign === '+') return <button onClick={() => onPlus(char, stat, number)}> <strong>+</strong> </button>
}

export default ButtonStats;