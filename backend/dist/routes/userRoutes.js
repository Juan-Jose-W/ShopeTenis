"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ussersController_1 = require("../controllers/ussersController");
const router = (0, express_1.Router)();
router.post('/register', ussersController_1.registrerUser);
router.get('/', ussersController_1.getAllUser);
router.get('/:id', ussersController_1.getUserByid);
exports.default = router;
