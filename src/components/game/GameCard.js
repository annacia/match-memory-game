import React from 'react'
import PropTypes from 'prop-types'
import {
    Card, 
    CardImg, 
} from 'reactstrap'

import style from '../../assets/style/game.module.scss'

const GameCard = (props) => {
    const { content, openCard } = props

    const flipCard = () => {
        openCard()
    }

    if (!content.open) {
        return (
            <Card onClick={flipCard} className={style.gamecard}>
                <CardImg top width="100%" src="/img/cards/bg.jpg" alt="Match Memory Game" />
            </Card>    
        )
    }

    let img = "/img/cards/"+content.img

    return (
        <Card onClick={flipCard} className={style.gamecard}>
            <CardImg top width="100%" src={img} alt="Match Memory Game" />
        </Card>
    )
}

const cardShape = {
    open: PropTypes.bool,
    img: PropTypes.string.isRequired
}

GameCard.propTypes = {
    content: PropTypes.shape(cardShape),
    openCard: PropTypes.func.isRequired
}
  
export default GameCard;