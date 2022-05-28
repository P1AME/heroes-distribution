import { actions } from "../actions";

export const defaultState = {
    view: 'list',
    characters: [],
}
    ;

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case actions.SET_CHAR:
            return { ...state, characters: action.char }
        case actions.CHANGE_VIEW:
            return { ...state, view: "char" };
        case actions.RESET_POINTS:
            return {
                ...state, characters: {
                    ...state.characters, [action.character.id]: {
                        ...state.characters[action.character.id],
                        stats: { restant: 20, force: 0, intelligence: 0, agilite: 0, endurance: 0 }
                    }
                }
            }
        case actions.STAT_MINUS:

            switch (action.stat) {
                case 'f':
                    return { ...state, characters: { ...state.characters, [action.character.id]: {...state.characters[action.character.id], stats: { ...action.character.stats, force: action.character.stats.force - action.number, restant: action.character.stats.restant + action.number } } } }

                case 'i':
                    return { ...state, characters: { ...state.characters, [action.character.id]: {...state.characters[action.character.id], stats: { ...action.character.stats, intelligence: action.character.stats.intelligence - action.number, restant: action.character.stats.restant + action.number } } } }

                case 'a':
                    return { ...state, characters: { ...state.characters, [action.character.id]: {...state.characters[action.character.id], stats: { ...action.character.stats, agilite: action.character.stats.agilite - action.number, restant: action.character.stats.restant + action.number } } } }

                case 'e':
                    return { ...state, characters: { ...state.characters, [action.character.id]: {...state.characters[action.character.id], stats: { ...action.character.stats, endurance: action.character.stats.endurance - action.number, restant: action.character.stats.restant + action.number } } } }
            }


        case actions.STAT_PLUS:

            switch (action.stat) {
                case 'f':
                    return { ...state, characters: { ...state.characters, [action.character.id]: {...state.characters[action.character.id], stats: { ...action.character.stats, force: action.character.stats.force + action.number, restant: action.character.stats.restant - action.number } } } }

                case 'i':
                    return { ...state, characters: { ...state.characters, [action.character.id]: {...state.characters[action.character.id], stats: { ...action.character.stats, intelligence: action.character.stats.intelligence + action.number, restant: action.character.stats.restant - action.number } } } }

                case 'a':
                    return { ...state, characters: { ...state.characters, [action.character.id]: {...state.characters[action.character.id], stats: { ...action.character.stats, agilite: action.character.stats.agilite + action.number, restant: action.character.stats.restant - action.number } } } }

                case 'e':
                    return { ...state, characters: { ...state.characters, [action.character.id]: {...state.characters[action.character.id], stats: { ...action.character.stats, endurance: action.character.stats.endurance + action.number, restant: action.character.stats.restant - action.number } } } }
            }

    }
}
