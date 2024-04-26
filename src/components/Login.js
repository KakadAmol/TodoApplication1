import React, { useState } from "react";

const Login = ({ history }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the login function from Auth.js
        Auth.login(username, password, () => {
            history.push("/dashboard");
        });
    };

    export default Login;
}