import React from 'react'
import PropTypes from 'prop-types'

import styles from './GameCard.module.scss'

import {
    Card, CardBody, CardTitle
} from 'reactstrap'
  
const GameCard = (props) => {
    const { content, openCard } = props

    const flipCard = () => {
        openCard()
    }

    if (!content.open) {
        return (
            <Card onClick={flipCard} className={styles.gamecard}></Card>    
        )
    }

    return (
        <Card onClick={flipCard} className={styles.gamecard}>
            <CardBody>
                <CardTitle>{content.name}</CardTitle>
            </CardBody>
        </Card>
    )
}

GameCard.propTypes = {
    content: PropTypes.object.isRequired,
    openCard: PropTypes.func.isRequired
}
  
export default GameCard;