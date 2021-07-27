import React, { useState, Fragment } from 'react';
import { Article } from "./article";
import { useTracker } from 'meteor/react-meteor-data';
import { ArticleCollection } from "../api/ArticleCollection";
import { ArticleForm } from './ArticleForm'
import { LoginForm } from './LoginForm';



export const App = () => {
    const user = useTracker(() => Meteor.user());

    const article = useTracker(() => ArticleCollection.find({}, { sort: { createdAt: -1 }}).fetch());

    const logout = () => Meteor.logout();

    return(
        <div className="app">
            <header>
                <div className="app-bar">
                    <div className="app-header">
                        <li>
                            <img src="imports/ui/img/promeo_logo.png" alt=" logo Promeo " id="promeo_logo"/>
                        </li>
                        <li>
                            <h1> Bienvenue sur PromeoLanguage !</h1>
                        </li>

                    </div>
                </div>
            </header>

            <div className="main">
                {user ? (
                    <Fragment>
                        <div className="user" onClick={logout}>
                            {user.username}
                        </div>

                        <ArticleForm user={user}/>

                        <ul className="article">
                            { article.map(article =>
                            <Article
                                key={article._id}
                                article={article}
                            />
                            )}
                        </ul>
                    </Fragment>
                ) : (
                    <LoginForm />
                )}
            </div>
        </div>
    );
};