import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {
    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/TS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 4, title: "Meat", isDone: true},
        {id: 5, title: "Fish", isDone: true},
        {id: 6, title: "Beer", isDone: false},
    ]
    return (
        <div className="App">
            <TodoList
                title={"What to do"}
                tasks={tasks_1}
            />
            <TodoList
                title={"What to learn"}
                tasks={tasks_2}
            />

        </div>
    );
}

export default App;
