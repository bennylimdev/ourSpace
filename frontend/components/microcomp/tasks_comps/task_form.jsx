import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='task__form__container'>
                <form className="task__form">
                <input 
                    name="title"
                    type="text" 
                    className="taskTitle__inputField" 
                    placeholder="Name your task" 
                />
                <button type="submit" className="task__inputButton">Add</button>
        </form>
            </div>
        );
    };
};

export default TaskForm;