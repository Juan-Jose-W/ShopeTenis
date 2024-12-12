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
exports.getUserByid = exports.getAllUser = exports.registrerUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const registrerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const existingUser = yield User_1.default.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "Usuario ya Existe" });
            return;
        }
        const newUser = new User_1.default({ username, email, password });
        yield newUser.save();
        res.status(201).json({ message: "Usuario registrtado con exito", user: newUser });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error ocurred';
        res.status(500).json({ message: errorMessage });
    }
    ;
});
exports.registrerUser = registrerUser;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        res.status(200).json(users);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error ocurred';
        res.status(500).json({ message: errorMessage });
    }
});
exports.getAllUser = getAllUser;
const getUserByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: "Usuario no encontrado" });
            return;
        }
        res.status(200).json(User_1.default);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error ocurred';
        res.status(500).json({ error: errorMessage });
    }
});
exports.getUserByid = getUserByid;
