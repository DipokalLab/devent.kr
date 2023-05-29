import express from 'express';

async function startExpressServer() {
    const app = express();
  

    app.set('trust proxy', 1);
    app.disable('x-powered-by');


    app.use('/', express.static('./'));


    return app.listen(8000, err => {
        console.log(`[ + ] The server is running.`);
    });
}
  
let server = await startExpressServer();
export { server }