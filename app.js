const packageJson = require('./data/package');
const util = require('./utils/generator');

const fs = require('fs-extra');
const [,, ... args]=process.argv;

let createFile = (command, data)=>{
    fs.outputFile(command, data)
        .then(()=>{
        })
        .catch((error)=>{console.log(error)})
};


if(args[0]!== undefined && args[0] ==="init"){
    if(args[1]!== undefined && typeof args[1]==="string"){
        packageJson.name=args[1];
        createFile(`${args[1]}/package.json`,util.createPackageJson(args[1]));
        createFile(`${args[1]}/src/server.ts`,util.createServer());
        createFile(`${args[1]}/src/index.ts`, util.createIndex(args[2]));
    }else {
        console.log("Name project required")
    }
}else {
    console.log("init required");
}