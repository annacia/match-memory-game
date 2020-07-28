export const openCard = (key, index) => ({
    type: "OPEN_CARD",
    key,
    index
})

export const matchCard = key => ({
    type: "MATCH_CARD",
    key
})

export const startGame = () => ({
    type: "START_GAME"
})

export const saveResult = (score, name) => ({
    type: "SAVE_RESULT",
    score,
    name
})

export const getPlayers = (month, year) => ({
    type: "GET_PLAYERS",
    month,
    year
})