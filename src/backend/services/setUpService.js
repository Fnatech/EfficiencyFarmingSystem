import feathersMongo from 'feathers-mongodb'

export default function(db, url, collection, beforeHook = {}, afterHook = {}) {
    return function createPlugin() {
        const app = this;
        // app.use(url, feathersMongo({ Model: db.collection(collection) }));
        const getDB = db.db('hackathon')
        app.use(url, feathersMongo({ Model: getDB.collection(collection) }));
        app.service(url).hooks({ before: beforeHook, after: afterHook });
      };
}