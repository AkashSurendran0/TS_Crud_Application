"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controllers/userController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
const alterStudent = new userController_1.default();
router.get('/', alterStudent.loadPanel);
router.post('/addUser', alterStudent.addUser);
router.post('/editUser/:id', alterStudent.editUser);
router.get('/deleteUser/:id', alterStudent.deleteUser);
exports.default = router;
