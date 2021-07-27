import React from "react";

export const Article = ({article}) => {
    return (
        <li>{article.id} - {article.title}  || {article.text}</li>

    )

};