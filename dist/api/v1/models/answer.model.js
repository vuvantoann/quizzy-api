"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const answerSchema = new mongoose_1.default.Schema({
    topicId: String,
    userId: String,
    answers: [
        {
            questionId: String,
            answer: Number,
        },
    ],
}, {
    timestamps: true,
});
const Answer = mongoose_1.default.model('Answer', answerSchema, 'answers');
exports.default = Answer;
