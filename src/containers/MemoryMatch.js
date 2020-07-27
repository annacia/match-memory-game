import { connect } from 'react-redux'
import { openCard, matchCard, startGame, saveResult } from '../actions'
import MemoryGame from '../components/game/MemoryGame'

const mapDispatchToProps = dispatch => ({
    openCard: (key, index) => dispatch(openCard(key, index)),
    matchCard: (key) => dispatch(matchCard(key)),
    startGame: () => dispatch(startGame()),
    saveResult: (score, name) => dispatch(saveResult(score, name))
})

const mapStateToProps = store => ({
    cards: store.cardReducer,
    user: store.userReducer
});

// startGame
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemoryGame)
