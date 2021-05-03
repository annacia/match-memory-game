const playerReducer = (state = [], action) => {
    let newState = []
    switch (action.type) {
        case 'GET_PLAYERS':
            newState = action.payload
            return newState

        case 'SAVE_RECORD':
            newState = action.payload
            return newState 
        default:
          return state
    }
}

export default playerReducer