var config = {}

config.host = process.env.TVENDPOINT;
config.authKey = process.env.TVAUTH_KEY;
config.databaseId = "TrineOgVegard";
config.articleCollectionId = "Articles";
config.rsvpCollectionId = "Rsvp";
config.title = "Trine & Vegard 27.08.2016"
config.gmapskey = process.env.TVGMAPS_KEY;

module.exports = config;