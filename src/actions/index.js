import FirebaseService from '../services/FirebaseService'

export const openCard = (key, index) => ({
    type: "OPEN_CARD",
    key,
    index
})

export const matchCard = key => ({
    type: "MATCH_CARD",
    key
})

export const beforeStart = () => ({
    type: "BEFORE_START"
})

export const startGame = () => ({
    type: "START_GAME"
})

export const getPlayers = () => async dispatch => {
    FirebaseService.getDataList('match-memory-game', snapshot => {
        dispatch({
            type: "GET_PLAYERS",
            payload: snapshot
        })
    })
}

export const saveRecord = (score, name, total) => async dispatch => {
    FirebaseService.pushData('match-memory-game', {score: score, name: name, total: total})
}

export const removeRecord = (key) => async dispatch => {
    FirebaseService.remove('match-memory-game', key)
}