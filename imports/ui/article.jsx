import React from "react";

export const Article = ({article}) => {
    return (
        <li>{article.title}  || {article.text}</li>

    )

};