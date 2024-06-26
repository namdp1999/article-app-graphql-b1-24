"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var article_resolver_1 = require("./article.resolver");
var category_resolver_1 = require("./category.resolver");
var user_resolver_1 = require("./user.resolver");
exports.resolvers = [
    article_resolver_1.resolversArticle,
    category_resolver_1.resolversCategory,
    user_resolver_1.resolversUser
];
