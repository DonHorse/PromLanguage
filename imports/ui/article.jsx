import React from "react";

export const Article = ({article}) => {
    return (
        <li>{article.user} - {article.title}  || {article.text}</li>

    )

};