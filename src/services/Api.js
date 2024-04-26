const BASE_URL = "https://your-mock-api-endpoint.com";

export default {
    getTodos: (callback) => {
        fetch(`${BASE_URL}/todos`)
            .then((response) => response.json())
            .then((data) => callback(data.todos));
    },
    createTodo: (todo, callback) => {
        fetch(`${BASE_URL}/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        })
            .then((response) => response.json())
            .then((data) => callback(data.todo));
    },
    updateTodo: (id, todo, callback) => {
        fetch(`${BASE_URL}/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        })
            .then((response) => response.json())
            .then((data) => callback(data.todo));
    },
    deleteTodo: (id, callback) => {
        fetch(`${BASE_URL}/todos/${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => callback(data.result));
    },
};