import { Meteor } from 'meteor/meteor';
import { ArticleCollection } from '/imports/api/ArticleCollection';

const insertArticle = articleTitle => ArticleCollection.insert({ title: articleTitle });

Meteor.startup(() => {
  if (ArticleCollection.find().count() === 0) {
    [
      'First Article',
      'Second Article',
      'Third Article',
      'Fourth Article',
      'Fifth Article',
      'Sixth Article',
      'Seventh Article'
    ].forEach(insertArticle)
  }
});