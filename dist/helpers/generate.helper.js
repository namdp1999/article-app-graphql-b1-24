"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = exports.generateRandomString = void 0;
var generateRandomString = function (length) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
exports.generateRandomString = generateRandomString;
var generateRandomNumber = function (length) {
    var characters = "0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
exports.generateRandomNumber = generateRandomNumber;
