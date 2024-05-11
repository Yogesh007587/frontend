import React, { useState, Fragment } from 'react';
// import {useHistory} from "react-router-dom";
// import { withRouter } from 'react-router-dom'; // Add this line
import { useNavigate } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import "./Search.css";

const Search = () => {
    const navigate=useNavigate();
    const [keyword, setKeyword] = useState("");
    // const history =useHistory();
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);
        } else {
            navigate("/products");
        }
    };
    return (
        <Fragment>
            <MetaData title="Search A Product -- proCart" />
            <form className="searchBox" onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    placeholder="Search a Product ..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>
        </Fragment>
    )
}

export default Search;
