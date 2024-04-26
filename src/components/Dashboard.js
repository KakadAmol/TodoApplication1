import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";
import Search from "./Search";

const Dashboard = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fetch todo items from the mock API endpoint
        Api.getTodos((todos) => setTodos(todos));
    }, []);

    const handleSearch = (searchTerm) => {
        // Filter todo items based on the search term
        const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTodos(filteredTodos);
    };


    export default Dashboard;
}