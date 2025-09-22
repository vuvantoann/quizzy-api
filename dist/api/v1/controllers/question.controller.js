"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsInTopic = exports.detail = exports.index = void 0;
const question_model_1 = __importDefault(require("../models/question.model"));
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield question_model_1.default.find({});
    res.json(questions);
});
exports.index = index;
const detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const question = yield question_model_1.default.findOne({
        _id: id,
    });
    res.json(question);
});
exports.detail = detail;
const QuestionsInTopic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const topicId = req.params.topicId;
        const questions = yield question_model_1.default.find({
            topicId: topicId,
        });
        return res.json(questions);
    }
    catch (error) {
        console.error('Lỗi :', error);
        return res.status(400).json({
            code: 400,
            message: 'Không tồn tại!',
        });
    }
});
exports.QuestionsInTopic = QuestionsInTopic;
