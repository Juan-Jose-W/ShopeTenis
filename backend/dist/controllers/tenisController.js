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
exports.getTenisById = exports.addTenis = exports.getAllTenis = void 0;
const Tenis_1 = __importDefault(require("../models/Tenis"));
const getAllTenis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tenis = yield Tenis_1.default.find();
        res.status(200).json(tenis);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
});
exports.getAllTenis = getAllTenis;
const addTenis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const newTenis = new Tenis_1.default(req.body);
        yield newTenis.save();
        res.status(201).json(newTenis);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
});
exports.addTenis = addTenis;
const getTenisById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tenis = yield Tenis_1.default.findById(req.params.id);
        if (!tenis) {
            res.status(404).json({ message: 'Recipe not found' });
        }
        else {
            res.status(200).json(tenis);
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
});
exports.getTenisById = getTenisById;
