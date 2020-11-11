import React from 'react';

// {item} - kallas för destructering och kan användas för att plocka ut en egenskap från props-objektet
function AddTodo(props) {
    console.log(props);

    const handleKeyUp = (event) => {
        //console.log(event);
        if(event.key == 'Enter') {
            console.log('Todo added: ', event.target.value);
            props.updateState(event.target.value)
        }
    }

    return (
        <section>
            <input placeholder="Skriv in en todo" onKeyUp={handleKeyUp} />
        </section>
    )
}

export default AddTodo;