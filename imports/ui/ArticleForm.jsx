import React, { useState } from 'react';
import { ArticleCollection } from "../api/ArticleCollection";

export const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!title || !text) return;

        ArticleCollection.insert({
            title: title.trim(),
            text: text.trim(),
            createdAt: new Date()
        });

        setText("");
        setTitle("");
    };

    return (
        <form className="article-form">
            <input
                type="text"
                placeholder="Entrer le titre de votre article"
            />

            <input
                type="text"
                placeholder="Entrer le contenu de votre article"
            />

            <button type="submit">Ajouter l'article</button>
        </form>

    );
};