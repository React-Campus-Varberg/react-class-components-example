import React from 'react';

// {item} - kallas för destructering och kan användas för att plocka ut en egenskap från props-objektet
function TodoItem(props) {
    console.log(props);
    let done = '';

    if (props.done === 'true') {
        done = 'Klar';
    } else {
        done = 'Ej klar';
    }

    return (
        <li>{props.item} {done}</li>
    )
}

export default TodoItem;