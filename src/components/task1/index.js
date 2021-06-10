import React from 'react';
import { v4 } from 'uuid';

const names = [
    {
        name: "Artem"
    },
    {
        name: "Anna"
    },
    {
        name: "Artur"
    },
    {
        name: "Anastasia"
    },
    {
        name: "Angelina"
    },
];

class List extends React.Component {
    render() {
        return (
            <div>
                {names.map((element) => {
                const {name} = element;
                return (
                    <p key={v4()}>
                        <span>{name}</span>
                    </p>
                )
            })}
            </div>
        )
    }
}

export default List;