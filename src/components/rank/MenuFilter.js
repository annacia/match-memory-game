import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import List from './List'

const MenuFilter = (props) => {
    const { data, getPlayers } = props

    const [ isUpdated, setIsUpdated ] = useState(false)

    useEffect(() => {
        if (!isUpdated) {
            getPlayers()
            setIsUpdated(true)
        }
    }, [getPlayers, isUpdated] )

    return (
        <Container>
            {data && <List data={data.slice().sort((a, b) => {return a.total-b.total})}/>}
        </Container>
    );
}

export default MenuFilter;