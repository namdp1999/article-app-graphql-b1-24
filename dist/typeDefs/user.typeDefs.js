"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsUser = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsUser = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    code: Int,\n    message: String,\n    id: String,\n    fullName: String,\n    email: String,\n    token: String\n  }\n\n  input UserInput {\n    fullName: String,\n    email: String,\n    password: String\n  }\n\n  type Query {\n    getUser: User\n  }\n\n  type Mutation {\n    registerUser(user: UserInput): User,\n    loginUser(user: UserInput): User,\n  }\n"], ["\n  type User {\n    code: Int,\n    message: String,\n    id: String,\n    fullName: String,\n    email: String,\n    token: String\n  }\n\n  input UserInput {\n    fullName: String,\n    email: String,\n    password: String\n  }\n\n  type Query {\n    getUser: User\n  }\n\n  type Mutation {\n    registerUser(user: UserInput): User,\n    loginUser(user: UserInput): User,\n  }\n"])));
var templateObject_1;
