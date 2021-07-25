import React, { useState } from 'react';
import { ArticleCollection } from "../api/ArticleCollection";

export const ArticleForm = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!title) return;
        if (!text) return;

        ArticleCollection.insert({
            title: title.trim(),
            text: text.trim(),
            createdAt: new Date()
        });

        setTitle("");
        setText("");

    };

    return (
        <form className="article-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Entrer le titre de votre article"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="textarea"
                placeholder="Entrer le contenu de votre article"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">Ajouter l'article</button>
        </form>

    );
};