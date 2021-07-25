import React from 'react';
import { Article } from "./article";
import { useTracker } from 'meteor/react-meteor-data';
import { ArticleCollection } from "../api/ArticleCollection";
import {ArticleForm, TaskForm} from './ArticleForm'


export const App = () => {
    const article = useTracker(() => ArticleCollection.find({}, { sort: { createdAt: -1 }}).fetch());

    return(
    <div>
        <h1>Bienvenue sur PromeoLanguage !</h1>

        <TaskForm/>

        <ul>
            { article.map(article => <Article key={article._id} article={article}/>)}
        </ul>
    </div>
    );
};