import {CARDS} from '../mocks/cards'

const initialState = CARDS.concat(CARDS).sort(() => Math.random() - 0.5)

const cardReducer = (state = initialState, action) => {
    let newState = [...state]
    let openCards = []

    switch (action.type) {
        case 'OPEN_CARD':
            newState.forEach((card) => {
                if ((card.open === true) && (card.match === false)) {
                    openCards.push(card) 
                } 
            })

            if (openCards.length < 2) {
                newState = [...state]
                newState[action.index] = {...newState[action.index], open: true}
            }
            
            return newState

        case 'MATCH_CARD':
            newState = [...state]

            newState.forEach((card) => {
                if ((card.open === true) && (card.match === false)) {
                    openCards.push(card) 
                } 
            })

            if (openCards.length < 2) {
                return newState
            }

            if (openCards[0]["key"] === openCards[1]["key"]) {
                return state.map(card =>
                    card.key === action.key ? { ...card, match: true } : card
                );
            }

            return state.map(card =>
                (card.open === true && card.match === false) ? { ...card, open: false } : card
            );
        case 'START_GAME':
            return newState.map(card =>
                {
                    return {...card, open: false, match: false}
                }
            ).sort(() => Math.random() - 0.5)
        default:
            return state
    }

}

export default cardReducer