import React from 'react';
import { Table } from 'reactstrap';

const List = (props) => {
    const { data } = props

    return (
        <Table borderless>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>#{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default List;