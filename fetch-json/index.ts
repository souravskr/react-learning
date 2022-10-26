import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const isTaskComplete = todo.completed;
    todoLog(id, title, isTaskComplete);
})

const todoLog = (taskID: number, taskTitle: string, isComplete: boolean) => {
    console.log(`
        The Todo with ID: ${taskID}
        Has a title of: ${taskTitle}
        Is it finished? ${isComplete}
    `);
}
