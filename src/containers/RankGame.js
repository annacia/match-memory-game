import { connect } from 'react-redux'
import { getPlayers } from '../actions'
import MenuFilter from '../components/rank/MenuFilter'

const mapDispatchToProps = dispatch => ({
    getPlayers: (month, year) => dispatch(getPlayers(month, year))
})

const mapStateToProps = store => ({
    data: store.playerReducer
});

// startGame
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuFilter)
