//include mongodb
const mongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const url = "mongodb+srv://jasem:jasem@cluster0-21jug.mongodb.net/blgoAPI2";
mongoClient.connect(url, (err, result) => {
  exports.posts = result.db().collection("posts");
  exports.comments = result.db().collection('comments');
  exports.tags = result.db().collection('tags');
  exports.users = result.db().collection('users');
  exports.categories = result.db().collection('categories');
});

exports.ObjectId = ObjectId;
