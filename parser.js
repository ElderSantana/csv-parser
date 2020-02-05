"use strict"; 
const csvParser = require('csv-parser');
const fileSystem = require('fs');

class Parser {

    constructor(){
        this.csvParser = csvParser;
        this.fileSystem = fileSystem;
        this.csvJson =  [];
    }
    
    csvToArray(filePath){
    
        this.fileSystem.createReadStream(filePath)
        .pipe(this.csvParser())
        .on('data', (row) => {
            this.csvJson.push(row);
        })
        .on('end', () => {
            console.log(this.csvJson);
        })
    }
}
module.exports = Parser;