"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var article_typeDefs_1 = require("./article.typeDefs");
var category_typeDefs_1 = require("./category.typeDefs");
var user_typeDefs_1 = require("./user.typeDefs");
exports.typeDefs = [
    article_typeDefs_1.typeDefsArticle,
    category_typeDefs_1.typeDefsCategory,
    user_typeDefs_1.typeDefsUser,
];
