"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const connectDb_1 = require("./db/connectDb");
const app = (0, express_1.default)();
(0, connectDb_1.dbConnect)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use('/', userRouter_1.default);
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../views'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
let PORT = 5555;
app.listen(PORT, () => console.log(`Server is connected at ${PORT}`));
