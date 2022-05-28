export const actions = {
    CHANGE_VIEW: "CHANGE_VIEW",
    RESET_POINTS: "RESET_POINTS",
    SAVE_CHANGES: "SAVE_CHANGES",
    SET_CHAR: "SET_CHAR",
    STAT_MINUS: "STAT_MINUS",
    STAT_PLUS: "STAT_PLUS",
}

export function setChar(char) {
    console.warn(char);
    const newChar = char.reduce((acc, aChar) => ({
        ...acc
        ,
        [aChar.id]: aChar,
    }), {})

    return {
        type: actions.SET_CHAR,
        char: newChar
    }
}

export function resetPoint(character) {
    return {
        type: actions.RESET_POINTS,
        character,
    }
}
export function saveChanges(character) {
    return {
        type: actions.SAVE_CHANGES,
        character,
    }
}

export function statsMinus(character, stat, number){
    return {
        type: actions.STAT_MINUS,
        character,
        stat, 
        number,
    }
}

export function statsPlus(character, stat, number){
    return {
        type: actions.STAT_PLUS,
        character,
        stat, 
        number,
    }
}