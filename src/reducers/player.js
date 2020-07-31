import FirebaseService from '../services/FirebaseService'

const playerReducer = (state = {players: []}, action) => {
    let newState = {...state}
    switch (action.type) {
        case 'GET_PLAYERS':
            newState = {...state}
            newState.players = action.payload
            
            return newState

        case 'SAVE_RECORD':
            newState = {...state}
            newState.players = action.payload

            console.log(newState)
            return newState 
        default:
          return state
    }
}

export default playerReducer