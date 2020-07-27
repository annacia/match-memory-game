import FirebaseService from '../services/FirebaseService'

const initialState = {
   name: "",
   score: "",
   date: "" 
}

const userReducer = (state = initialState, action) => {
  let newState = {...state}
    switch (action.type) {
        case 'SAVE_RESULT':
          let date = new Date()
          let month = date.getMonth() + 1

          newState.name = action.name
          newState.score = action.score
          newState.date = date.getDate() + '-' + month + '-' + date.getFullYear()

          return FirebaseService.pushData('match-memory-game', newState)
        default:
          return state
    }
}

export default userReducer