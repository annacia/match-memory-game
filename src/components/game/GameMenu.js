import React, { useState } from 'react';
import MemoryGame from '../../containers/MemoryGame'

import { 
    Button, 
    Container,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Label, 
    Input 
} from 'reactstrap';

import style from '../../assets/style/main.module.scss'

const GameMenu = () => {
    const [ modal, setModal ] = useState(false);
    const [ name, setName ] = useState("")
    const [ gameStart, setGameStart ] = useState(false)
    
    const toggle = () => setModal(!modal);
    
    const onPlay = () => {
        setGameStart(true)
    }

    const startGame = () => {
        toggle()
        onPlay()
    }

    if (gameStart) {
        return (
            <div id="game">
                <MemoryGame username={name}/>
            </div>
        )
    }

    return (
        <Container id="game-menu">
            <p className={style.text}>This Match Memory Game was made with ReactJS using Redux and Redux Thunk with Firebase, to play this game, click in the link bellow.</p>
            <Button onClick={toggle} className={style.btn}>Start Game</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Start Game</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Your Name:</Label>
                            <Input type="text" name="name" id="name" maxLength="12" placeholder="Insert your name" onChange={(e) => setName(e.target.value)} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={startGame}>Play</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default GameMenu;