const playerReducer = (state = [], action) => {
    let newState = []
    switch (action.type) {
        case 'GET_PLAYERS':
            newState = [...state]
            return newState

        case 'SAVE_RECORD':
            newState = [...state, action.payload]
            return newState 
        default:
          return state
    }
}

export default playerReducer