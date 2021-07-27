import React from 'react';
import { Article } from "./article";
import { useTracker } from 'meteor/react-meteor-data';
import { ArticleCollection } from "../api/ArticleCollection";
import { ArticleForm } from './ArticleForm'


export const App = () => {
    const article = useTracker(() => ArticleCollection.find({}, { sort: { createdAt: -1 }}).fetch());

    return(
        <div className="app">
            <header>
                <div className="app-bar">
                    <div className="app-header">
                        <h1><img src="imports/ui/img/promeo_logo.png" alt=" logo Promeo " id="promeo_logo"/> Bienvenue sur PromeoLanguage !</h1>

                    </div>
                </div>
            </header>

            <div className="main">

                <ArticleForm/>

                <ul className="article">
                    { article.map(article =>
                        <Article
                            key={article._id}
                            article={article}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
};