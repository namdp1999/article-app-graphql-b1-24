"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    fullName: String,
    email: String,
    password: String,
    token: String,
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date,
}, {
    timestamps: true,
});
var User = mongoose_1.default.model("User", userSchema, "users");
exports.default = User;
