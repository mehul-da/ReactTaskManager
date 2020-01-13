import React from 'react';

const CreateTask = props => (
    <div>
        TASK: {props.task}
        DEADLINE: {props.deadline}
        IMPORTANCE: {props.importance}
    </div>
);

export default CreateTask;
