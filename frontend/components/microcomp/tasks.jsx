import React from 'react';
import TaskForm from './tasks_comps/task_form';
import TaskList from './tasks_comps/task_list';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='tasks'>
                <TaskForm />
                <TaskList />
            </div>
        );
    };
};

export default Tasks;