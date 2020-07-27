import React from 'react'
import PropTypes from 'prop-types'
import {
    Card, 
    CardBody, 
    CardTitle
} from 'reactstrap'

import styles from './GameCard.module.scss'

const GameCard = (props) => {
    const { content, openCard } = props

    const flipCard = () => {
        openCard()
    }

    if (!content.open) {
        return (
            <Card onClick={flipCard} className={styles.gamecard}>
                <CardBody>
                    <CardTitle></CardTitle>
                </CardBody>
            </Card>    
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

const cardShape = {
    open: PropTypes.bool,
    name: PropTypes.string.isRequired
}

GameCard.propTypes = {
    content: PropTypes.objectOf(PropTypes.shape(cardShape)),
    openCard: PropTypes.func.isRequired
}
  
export default GameCard;