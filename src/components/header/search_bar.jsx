import React from "react";
import style from "./searchBar.module.css";

const Search_bar = ({onSearch}) => {
    const handleSearch = (e) => {
        const value = e.target.value;
        onSearch(value);
    };

    const onClick = (e) => {
        handleSearch(e);
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") handleSearch(e);
    };

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src="/images/logo.png" alt="logo"/>
                <h1>Youtube</h1>
            </div>
            <input
                className={style.searchText}
                type="search"
                placeholder="Search..."
                onKeyPress={onKeyPress}
            />
            <button className={style.search} type="submit" onClick={onClick}>
                <img src="/images/search.png" alt="search" />
            </button>
        </header>
    );
};

export default Search_bar;
