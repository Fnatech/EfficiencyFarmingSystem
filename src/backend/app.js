import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';
import configuration from '@feathersjs/configuration';
import { MongoClient } from 'mongodb'

import path from 'path';

import services from './services';

const app = express(feathers());

app
    .configure(express.rest())
    .configure(socketio())
    .configure(configuration())

    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(express.static(path.join(process.cwd()) + '/public'))
    .use(express.errorHandler())

const setUpServer = async () => {
    const db = await MongoClient.connect(app.get('mongoURI'),  { useNewUrlParser: true });
    app.configure(services(db));
    return app;
};

export default setUpServer;
