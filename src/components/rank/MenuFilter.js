import React, {useState, useEffect} from 'react';
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import List from './List'

const MenuFilter = (props) => {
    const { data, getPlayers } = props
    
    let today = new Date()
    let monthString = today.getMonth()+2
    monthString = monthString+""
    let yearString = today.getFullYear()+"" 

    const [ date, setDate ] = useState(today)
    const [ month, setMonth ] = useState(monthString)
    const [ year, setYear ] = useState(yearString)

    const saveDate = (value) => {
        let dateObj = new Date(value)
        setDate(dateObj)

        monthString = dateObj.getMonth() + 2
        setMonth(monthString+"")
        setYear(dateObj.getFullYear()+"")
    }

    const filter = () => {
        getPlayers()
    }

    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="date">Select Month and Year</Label>
                    <Input 
                        type="month"
                        name="date"
                        id="date"
                        onChange={(e) => {saveDate(e.target.value)}}
                    />
                </FormGroup>
                <Button onClick={filter}>Filter</Button>
            </Form>
            {data.players && <List data={data.players}/>}
        </Container>
    );
}

export default MenuFilter;