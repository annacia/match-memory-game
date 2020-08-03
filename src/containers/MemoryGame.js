import { connect } from 'react-redux'
import { openCard, matchCard, startGame, saveRecord, getPlayers, removeRecord } from '../actions'
import MemoryGame from '../components/game/MemoryGame'

const mapDispatchToProps = dispatch => ({
    openCard: (key, index) => dispatch(openCard(key, index)),
    matchCard: (key) => dispatch(matchCard(key)),
    startGame: () => dispatch(startGame()),
    saveRecord: (score, name, total) => dispatch(saveRecord(score, name, total)),
    getPlayers: () => dispatch(getPlayers()),
    removeRecord: (key) => dispatch(removeRecord(key))
})

const mapStateToProps = store => ({
    cards: store.cardReducer,
    players: store.playerReducer
});

// startGame
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemoryGame)
