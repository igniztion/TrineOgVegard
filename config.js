var config = {}

config.host = process.env.TVENDPOINT;
config.authKey = process.env.TVAUTH_KEY;
config.databaseId = "TrineOgVegard";
config.articleCollectionId = "Articles";

module.exports = config;