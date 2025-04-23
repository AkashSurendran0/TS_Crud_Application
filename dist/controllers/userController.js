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
const userModel_1 = __importDefault(require("../models/userModel"));
class modifyStudent {
    constructor() {
        this.loadPanel = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield userModel_1.default.find();
            res.render('adminPanel', {
                users: users
            });
        });
        this.addUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, age } = req.body;
            const data = {
                name: name,
                email: email,
                age: age
            };
            yield userModel_1.default.insertOne(data);
            res.redirect('/');
        });
        this.editUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, age } = req.body;
            const id = req.params.id;
            yield userModel_1.default.findByIdAndUpdate(id, {
                name,
                email,
                age
            });
            res.redirect('/');
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield userModel_1.default.findByIdAndDelete(id);
            res.redirect('/');
        });
    }
}
exports.default = modifyStudent;
