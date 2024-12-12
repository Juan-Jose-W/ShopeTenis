"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tenisRoutes_1 = __importDefault(require("./routes/tenisRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Aumentar el límite a 10mb
app.use(express_1.default.json({ limit: '10mb' }));
app.use('/api/tenis', tenisRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
exports.default = app;
