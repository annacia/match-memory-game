import FirebaseService from '../services/FirebaseService'

const initialState = {
   name: "",
   score: "" 
}

const userReducer = (state = initialState, action) => {
  let newState = {...state}
    switch (action.type) {
        case 'SAVE_RESULT':
          newState.name = action.name
          newState.score = action.score
          return FirebaseService.pushData('match-memory-game', newState)
        default:
          return state
    }
}

export default userReducer