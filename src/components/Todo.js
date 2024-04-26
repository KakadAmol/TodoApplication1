import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../services/Api";

const Todo = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const [editedDescription, setEditedDescription] = useState(todo.description);
    const [status, setStatus] = useState(todo.status);

    const handleEdit = () => {
        Api.updateTodo(todo.id, {
            title: editedTitle,
            description: editedDescription,
            status,
        });
        setIsEditing(false);
    };

    const handleDelete = () => {
        Api.deleteTodo(todo.id);
    };

    export default Todo;
}