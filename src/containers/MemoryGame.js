import { connect } from 'react-redux'
import { openCard, matchCard, startGame, saveRecord } from '../actions'
import MemoryGame from '../components/game/MemoryGame'

const mapDispatchToProps = dispatch => ({
    openCard: (key, index) => dispatch(openCard(key, index)),
    matchCard: (key) => dispatch(matchCard(key)),
    startGame: () => dispatch(startGame()),
    saveRecord: (score, name, total) => dispatch(saveRecord(score, name, total))
})

const mapStateToProps = store => ({
    cards: store.cardReducer,
    player: store.playerReducer
});

// startGame
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemoryGame)
