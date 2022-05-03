"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const createFolder = (folder) => {
    try {
        console.log('💾 Create a root uploads folder...');
        fs.mkdirSync(path.join(__dirname, '..', `uploads`));
    }
    catch (error) {
        console.log('The folder already exists...');
    }
    try {
        console.log(`💾 Create a ${folder} uploads folder...`);
        fs.mkdirSync(path.join(__dirname, '..', `uploads/${folder}`));
    }
    catch (error) {
        console.log(`The ${folder} folder already exists...`);
    }
};
const storage = (folder) => {
    createFolder(folder);
    return multer.memoryStorage();
};
const multerOptions = (folder) => {
    const result = {
        storage: storage(folder),
    };
    return result;
};
exports.multerOptions = multerOptions;
//# sourceMappingURL=multer.option.js.map