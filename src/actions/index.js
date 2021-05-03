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

export const getPlayers = () => ({
    type: "GET_PLAYERS"
})

export const saveRecord = (score, name, total) => {
    return function (dispatch){
        dispatch({
            type: "SAVE_RECORD",
            payload: {score, name, total}
        })
    }
}

export const removeRecord = (key) => {
    return function (dispatch){
        dispatch({
            type: "REMOVE_RECORD",
            payload: key
        })
    }
}