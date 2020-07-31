import React from 'react'
import RankGame from '../../containers/RankGame'
import { Container } from 'reactstrap'

const Rank = () => {
    return (
        <Container id="rank">
            <h2>Rank</h2>
            <p>This page shows the highlights of Match Memory Game players</p>
            <RankGame/>
        </Container>
    )
}

export default Rank