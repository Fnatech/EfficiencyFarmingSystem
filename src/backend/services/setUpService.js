import feathersMongo from 'feathers-mongodb'

export default function(db, url, collection, beforhook = {}, afterhook = {}) {
    return function createPlugin() {
        const app = this;
        // app.use(url, feathersMongo({ Model: db.collection(collection) }));
        app.use(url, feathersMongo({ Model: db.collection(collection) }));
        app.service(url).hooks({ before: beforeHook, after: afterHook });
      };
}