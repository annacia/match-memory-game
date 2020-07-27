import React, { useState } from 'react';
import MemoryGame from '../../containers/MemoryGame'

import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Label, 
    Input 
} from 'reactstrap';

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
        <div id="game-menu">
            <Button color="danger" onClick={toggle}>Start Game</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Start Game</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Your Name:</Label>
                            <Input type="text" name="name" id="name" placeholder="Insert your name" onChange={(e) => setName(e.target.value)} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={startGame}>Play</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default GameMenu;