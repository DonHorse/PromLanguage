import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { Accounts } from 'meteor/accounts-base';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}
const SEED_USERNAME = 'root';
const SEED_PASSWORD = 'root';

Meteor.startup(() => {

  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

});
