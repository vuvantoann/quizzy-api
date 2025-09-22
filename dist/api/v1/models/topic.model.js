"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const topicSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    level: {
        type: String,
        enum: ['Dễ', 'Trung bình', 'Khó'],
        default: 'Dễ',
    },
    questions: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: 'active',
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    deleteAt: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
});
const Topic = mongoose_1.default.model('Topic', topicSchema, 'topics');
exports.default = Topic;
