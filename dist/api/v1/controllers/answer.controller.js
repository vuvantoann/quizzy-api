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
exports.saveAnswer = exports.AnswerByUser = exports.detail = exports.index = void 0;
const answer_model_1 = __importDefault(require("../models/answer.model"));
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield answer_model_1.default.find({});
    res.json(answers);
});
exports.index = index;
const detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const answer = yield answer_model_1.default.findOne({
            _id: id,
        });
        return res.json(answer);
    }
    catch (error) {
        console.error('Lỗi :', error);
        return res.status(400).json({
            code: 400,
            message: 'Không tồn tại!',
        });
    }
});
exports.detail = detail;
const AnswerByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const answers = yield answer_model_1.default.find({
            userId: userId,
        });
        return res.json(answers);
    }
    catch (error) {
        console.error('Lỗi :', error);
        return res.status(400).json({
            code: 400,
            message: 'Không tồn tại!',
        });
    }
});
exports.AnswerByUser = AnswerByUser;
const saveAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAnswer = new answer_model_1.default(req.body);
        const data = yield newAnswer.save();
        return res.json({
            code: 200,
            message: 'Lưu answer thành công!',
            data: data,
        });
    }
    catch (error) {
        console.error('Lỗi:', error);
        return res.status(400).json({
            code: 400,
            message: 'Có lỗi xảy ra!',
        });
    }
});
exports.saveAnswer = saveAnswer;
