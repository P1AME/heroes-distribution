import {actions} from "../actions";

export const defaultState = {
    view: 'list',
    characters : [],
    }
;

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case actions.SET_CHAR :
            return {...state, characters: action.char}
        case actions.SAVE_CHANGES:
            return {...state, articles: [...action.articles]};
        case actions.CHANGE_VIEW:
            return {...state, view: "char"};
        case actions.RESET_POINTS:
            return {...state, characters: {...state.characters, [action.character.id] : {...state.characters[action.character.id],
                        stats : {restant: 20, force: 0, intelligence: 0, agilite: 0, endurance: 0}}}}
    }
}
