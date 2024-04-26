let loggedInUser = null;

export const setLoggedInUser = (user) => {
    loggedInUser = user;
};

export const getLoggedInUser = () => loggedInUser;

export const isLoggedIn = () => !!loggedInUser;

export const login = (username, password, callback) => {
    // Call the mock API endpoint to authenticate the user
    if (username === "admin" && password === "password") {
        setLoggedInUser({ username });
        callback();
    } else {
        alert("Invalid username or password");
    }
};

export const logout = (callback) => {
    setLoggedInUser(null);
    callback();
};