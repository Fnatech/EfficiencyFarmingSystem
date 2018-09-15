import setUpServer from './app';

const server = async() => {
    const app = await setUpServer();
    app.listen(app.get('port'), () => {
        console.log(`listen @ ${app.get('port')}`)
    })
};

server();