"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const dynamo_db_1 = __importDefault(require("./dbs/dynamo_db"));
const mysql_db_1 = __importDefault(require("./dbs/mysql_db"));
const grpcServer_1 = __importDefault(require("./servers/grpcServer"));
const restServer_1 = __importDefault(require("./servers/restServer"));
if (process.argv.length < 4) {
    console.error("Not enough command line arguments!");
    throw new Error("Not enough command line arguments!");
}
dotenv_1.default.config();
const db_choice = process.argv[3];
let db;
switch (db_choice) {
    case "dynamo":
        db = new dynamo_db_1.default();
        break;
    case "mysql":
        db = new mysql_db_1.default();
        break;
    default:
        console.error("Invalid database choice! (Must be dynamo or mysql)");
        throw new Error("Invalid database choice! (Must be dynamo or mysql)");
}
const server_choice = process.argv[2];
let server;
switch (server_choice) {
    case "rest":
        server = new restServer_1.default(db);
        break;
    case "grpc":
        server = new grpcServer_1.default(db);
        break;
    default:
        console.error("Invalid server choice! (Must be rest or grpc)");
        throw new Error("Invalid server choice! (Must be rest or grpc)");
}
server.start();
//# sourceMappingURL=main.js.map