"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var categorySchema = new mongoose_1.default.Schema({
    title: String,
    avatar: String,
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date,
}, {
    timestamps: true,
});
var Category = mongoose_1.default.model("Category", categorySchema, "categories");
exports.default = Category;
