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
    FirebaseService.getDataList('match-memory-game', snapshot => {
        let current = {score: score, name: name, total: total}
        let desc = snapshot.slice()
        desc = desc.sort((a, b) => {return a.total-b.total})

        let newRank = desc.slice()

        desc = desc.reverse()

        if (snapshot.length < 10) {
            newRank.push(current)
            newRank.sort((a, b) => {return a.total-b.total})
            FirebaseService.pushData('match-memory-game', current)
            dispatch({
                type: "SAVE_RECORD",
                payload: newRank
            })
            return;
        }
        
        if (current.total < desc[0]['total']) {
            newRank = newRank.reverse()

            FirebaseService.remove('match-memory-game', newRank[0]["key"])
            
            newRank[0] = current
            
            FirebaseService.pushData('match-memory-game', current)
            newRank.sort((a, b) => {return a.total-b.total})
        }
        
        dispatch({
            type: "SAVE_RECORD",
            payload: newRank
        })
    })
}