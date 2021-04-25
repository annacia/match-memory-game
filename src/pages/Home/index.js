import React from 'react'
import { Link } from "react-router-dom"
import { Button, Container } from 'reactstrap'

import style from '../../assets/style/home.module.scss'

const Home = () => {
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