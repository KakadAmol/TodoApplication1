import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };



    export default Search;
}