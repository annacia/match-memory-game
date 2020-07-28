import FirebaseService from '../services/FirebaseService'

const playerReducer = (state = {players: []}, action) => {
    switch (action.type) {
        case 'GET_PLAYERS':
            let newState = {...state}
            let date = action.month + '-' + action.year
            FirebaseService.getDataListWhere('match-memory-game', "date", date, (items) => {
                newState.players = items
                return newState
            }, 10)
            return newState
        default:
          return state
    }
}

export default playerReducer