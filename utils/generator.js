const util = {
    createPackageJson: (nameProjet) => {
        return `
{
    "name": "${nameProjet}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "npx tsc && node dist/index.js",
        "test": "echo \\"Error: no test specified\\" && exit 1",
        "dev": "concurrently -n \\"TS, Node\\" \\"npx tsc --watch\\" \\"nodemon dist/index.js\\""
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "@types/express": "^4.17.2",
        "@types/node": "^13.5.0",
        "concurrently": "^5.0.2",
        "express": "^4.17.1",
        "mongodb": "^3.5.2",
        "nodemon": "^2.0.2",
        "reflect-metadata": "^0.1.13",
        "typeorm": "^0.2.22"
    },
    "devDependencies": {
        "typescript": "^3.7.5"
    }
}`;
    },
    createServer: () => {
        return `
import express from 'express';

export default class Server {
    constructor(private port:number){}

    public start():void{
        const app = express();
        app.get("/", (req,res)=>{
            res.send("Hello world");
        });
        app.listen(this.port,()=>{
            console.log("Server started ...")
        })
    }

}
`
    },
    createIndex: (port) => {
        if (port === undefined) {
            return `
import Server from "./server";

let server = new Server(8080);
server.start();
`
        } else {
            return `
import Server from "./server";

let server = new Server(${port});
server.start();
`
        }

    }
};

module.exports = util;