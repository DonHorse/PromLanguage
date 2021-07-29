import { Meteor } from 'meteor/meteor';
import { ArticleCollection } from '/imports/api/ArticleCollection';
import { Accounts } from 'meteor/accounts-base';

const insertArticle = (articleTitle, user) =>
    ArticleCollection.insert({
      title: articleTitle ,
      userId : user._id,
      createdAt : new Date(),
    });

const SEED_USERNAME = 'Admin';
const SEED_PASSWORD = 'root';

/*Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

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
*/