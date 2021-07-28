import React from "react";
import {Link} from "react-router-dom"


export const Navbar = () => {

    return(
        <ul>
            <image href="./img/promeo_logo.png"></image>
            <Link to="/">
                <li>Accueil</li>
            </Link>
            <Link to="/FormChoice">
                <li>Questionnaire</li>
            </Link>
            <Link to="/Login">
                <li>Login</li>
            </Link>
            <Link to="/Logout">
                <li>Logout</li>
            </Link>
        </ul>
    );
};