import React from 'react';
import Draggable from 'react-draggable';

const NewCard = (props) => (
        <Draggable>
        <div style = {{fontFamily: "Garamond"}}>
        TASK: {props.task} <br/>
        DEADLINE: {props.deadline} <br/>
        IMPORTANCE: {props.importance} <br/>
        <button onClick = {() => props.removal(props.key)}><div style = {{fontFamily: "Monotype Corsiva", fontSize: 18}}> Remove Task </div></button>
        <br/>
        </div>
        </Draggable>
);
 

export default NewCard;
