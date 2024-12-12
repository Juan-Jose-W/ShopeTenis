"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tenisController_1 = require("../controllers/tenisController");
const router = (0, express_1.Router)();
router.get('/', tenisController_1.getAllTenis);
router.post('/', tenisController_1.addTenis);
router.get('/:id', tenisController_1.getTenisById);
exports.default = router;
