import React, { useState, useEffect } from 'react'
import GameCard from './GameCard'
import Timer from '../main/Timer'
import { CardDeck } from 'reactstrap'
import PropTypes from 'prop-types'
  
const MemoryGame = (props) => {
    const { cards, openCard, matchCard, startGame, saveResult, username } = props

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
        saveResult(score, username)
    }

    return (
        <div>
        <Timer stop={end} actionOnStop={saveScore}/>
        <CardDeck>
            {cards.map((item, index) => (
                <GameCard 
                    key={index} 
                    content={item} 
                    openCard={() => flipCard(item.key, index)}
                />
            ))}
        </CardDeck>
            {end && <p>Condragulations! You are the winner of this challenge! </p>}
        </div>
    )
}

MemoryGame.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    openCard: PropTypes.func.isRequired
}

export default MemoryGame;