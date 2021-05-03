import React, { useState, useEffect, useCallback } from 'react'
import GameCard from './GameCard'
import Timer from '../main/Timer'
import { Container, Alert } from 'reactstrap'
import PropTypes from 'prop-types'

import style from '../../assets/style/game.module.scss'
  
const MemoryGame = (props) => {
    const { cards, players, openCard, matchCard, beforeStart, startGame, username, saveRecord, getPlayers, removeRecord } = props

    const [ cardShowed, setCardShowed ] = useState(false)
    const [ start, setStart ] = useState(false)
    const [ end, setEnd ] = useState(false)
    const [ isSubmit, setIsSubmit ] = useState(false)
    const [ current, setCurrent ] = useState({score: "", name: "", total: ""})

    const prepareGame = useCallback(() => {
        beforeStart()
        setCardShowed(true)
        setTimeout(() => {
            setStart(true)
            startGame()
            setEnd(false)
        }, 5000)
      }, [beforeStart, startGame])

    const verifyCards = useCallback(() => {
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
    }, [cards])

    const submitScore = useCallback(() => {
        if (players.length < 5) {
            saveRecord(current.score, current.name, current.total)
            setIsSubmit(false)
        }

        console.log(isSubmit && players.length === 5);
        if (isSubmit && players.length === 5) {
            let desc = players.slice()
            desc = desc.sort((a, b) => {return a.total-b.total})
            let newRank = desc.slice()

            desc = desc.reverse()
            
            if (current.total < desc[0]['total']) {
                console.log(newRank)
                newRank = newRank.reverse()
                removeRecord('match-memory-game', newRank[0]["key"])
                saveRecord(current.score, current.name, current.total)
            }
            setIsSubmit(false)
        }
    }, [current, isSubmit, players, removeRecord, saveRecord])

    useEffect(() => {
        if (!cardShowed) {
            prepareGame()
        }

        console.log(players);
        if (start) {
            verifyCards()

            if (isSubmit) {
                getPlayers();
                submitScore();
            }
        }

    }, [
        players,
        cardShowed,
        prepareGame,
        start,
        verifyCards,
        isSubmit,
        getPlayers,
        submitScore
    ])

    const flipCard = (key, index) => {
        openCard(key, index)
        setTimeout(() => {
            matchCard(key);
        }, 1000);
    }

    const saveScore = (score) => {
        let timeArray = score.split(":")
        let total = (parseInt(timeArray[0]) * 3600) + (parseInt(timeArray[1]) * 60) + parseInt(timeArray[2])
        setCurrent({score: score, name: username, total: total})
        
        setIsSubmit(true)
    }

    return (
        <Container fluid="sm">
            <div className={style.timer}>
                {!start && <span>Score: 00:00:00</span>}
                {start && <span>Score: <Timer stop={end} actionOnStop={saveScore}/></span>}
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
    match: PropTypes.bool,
    key: PropTypes.number
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