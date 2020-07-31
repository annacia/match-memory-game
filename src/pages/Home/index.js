import React from 'react'
import { Link } from "react-router-dom"
import { Button, Container } from 'reactstrap'

import style from './style.module.scss'

const data = [
    "00:00:10",
    "00:01:00",
    "00:01:40",
    "01:00:00",
    "01:00:40",
    "01:40:00",
    "01:40:40"
]

const getSeconds = (time) => {
    let timeArray = time.split(":")

    return (timeArray[0] * 3600) + (timeArray[1] * 60) + timeArray[2]
}

const check = (curent, item) => {
    let currentArray = curent.split(":")
    let itemArray = item.split(":")

    let secondsCurrent = (currentArray[0] * 3600) + (currentArray[1] * 60) + currentArray[2]
    let secondsItem = (itemArray[0] * 3600) + (itemArray[1] * 60) + itemArray[2]

    if (secondsCurrent < secondsItem) {
        return true
    }

    return false
}

const buildNewRank = (time) => {
    let decresData = data.slice()
    let newRank = data.slice()

    decresData = decresData.reverse()

    if (check(time, decresData[0])) {
        newRank = newRank.reverse()

        newRank[0] = time
        newRank.sort((a, b) => {return getSeconds(a)-getSeconds(b)})
    }

    console.log(newRank)
}


const Home = () => {
    buildNewRank("00:20:00")
    return (
        <Container className={style.home}>
            <section className={style.content}>
                <h2>Play Match Memory Game</h2>
                <p>Click in the link bellow to play the game</p>
                <Button to="/game" tag={Link} className={style.btn}>Play Game</Button>
            </section>
            <section className={style.content}>
                <h2>Show Rank</h2>
                <p>Click in the link bellow to display the rank of Match Memory Game players</p>
                <Button to="/rank" tag={Link} className={style.btn}>Show Rank</Button>
            </section>
        </Container>
    )
}

export default Home