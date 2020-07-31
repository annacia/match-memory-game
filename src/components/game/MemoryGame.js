import React, { useState, useEffect } from 'react'
import GameCard from './GameCard'
import Timer from '../main/Timer'
import { Container, Alert } from 'reactstrap'
import PropTypes from 'prop-types'

import style from './MemoryGame.module.scss'
  
const MemoryGame = (props) => {
    const { cards, openCard, matchCard, startGame, username, saveRecord } = props

    const [ start, setStart ] = useState(false)
    const [ end, setEnd ] = useState(false)

    useEffect(() => {
        if (!start) {
            setStart(true)
            startGame()
            setEnd(false)
        }

        let lengthCards = cards.length
        let matchCards = []

        cards.forEach(card => {
            if (card.open && card.match) {
                matchCards.push(card)
            }
        });

        if (lengthCards === matchCards.length) {
            setEnd(true)
        }

    }, [start, startGame, cards])

    const flipCard = (key, index) => {
        openCard(key, index)
        setTimeout(() => {
            matchCard(key);
        }, 1000);
    }

    const saveScore = (score) => {
        let timeArray = score.split(":")
        let total = (parseInt(timeArray[0]) * 3600) + (parseInt(timeArray[1]) * 60) + parseInt(timeArray[2])
        
        saveRecord(score, username, total)
    }

    return (
        <Container fluid="sm">
            <div className={style.timer}>
                <span>Score: <Timer stop={end} actionOnStop={saveScore}/></span>
                <span>Username: {username}</span>
            </div>
            {end && <Alert color="success" className={style.alerttext}>
                Congratulations! You Finished the game!
            </Alert>}
            
            <Container fluid="sm" className={style.deck}>
                {cards.map((item, index) => (
                    <GameCard 
                        key={index} 
                        content={item} 
                        openCard={() => flipCard(item.key, index)}
                    />
                ))}
            </Container>
        </Container>
    )
}

const cardsShape = {
    open: PropTypes.bool,
    img: PropTypes.string.isRequired,
    match: PropTypes.bool
}

MemoryGame.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape(
            cardsShape
        ).isRequired
    ).isRequired,
    openCard: PropTypes.func.isRequired,
    matchCard: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    saveRecord: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}

export default MemoryGame;