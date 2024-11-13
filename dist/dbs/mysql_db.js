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
const uuid_1 = require("uuid");
const promise_1 = __importDefault(require("mysql2/promise"));
const logger_1 = __importDefault(require("../logger"));
class MySqlDB {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield promise_1.default.createConnection({
                host: process.env.RDS_HOSTNAME,
                user: process.env.RDS_USERNAME,
                password: process.env.RDS_PASSWORD,
                port: parseInt(process.env.RDS_PORT), // Default to 3306 if port is not specified
                database: process.env.RDS_DATABASE,
            });
            logger_1.default.info("MySQL connected!");
        });
    }
    constructor() {
        this.queryAllProducts = (categoryId) => __awaiter(this, void 0, void 0, function* () {
            this.logRequest("queryAllProducts", { categoryId });
            if (categoryId) {
                return (yield this.connection.query(`SELECT * FROM products WHERE categoryId = ?`, [categoryId]))[0];
            }
            else {
                return (yield this.connection.query(`SELECT * FROM products`))[0];
            }
        });
        this.queryAllCategories = () => __awaiter(this, void 0, void 0, function* () {
            this.logRequest("queryAllCategories");
            return (yield this.connection.query("SELECT * FROM categories;"))[0];
        });
        this.queryAllOrders = () => __awaiter(this, void 0, void 0, function* () {
            this.logRequest("queryAllOrders");
            return (yield this.connection.query("SELECT * FROM orders;"))[0];
        });
        this.queryOrderById = (id) => __awaiter(this, void 0, void 0, function* () {
            this.logRequest("queryOrderById", { id });
            return (yield this.connection.query(`SELECT * FROM orders WHERE id = ?`, [id]))[0][0];
        });
        this.queryUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            this.logRequest("queryUserById", { id });
            return (yield this.connection.query(`SELECT id, email, name FROM users WHERE id = ?`, [id]))[0][0];
        });
        this.queryAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            this.logRequest("queryAllUsers");
            return (yield this.connection.query("SELECT id, name, email FROM users"))[0];
        });
        this.insertOrder = (order) => __awaiter(this, void 0, void 0, function* () {
            this.logRequest("insertOrder", { orderId: order.id, userId: order.userId });
            const { id, userId, totalAmount } = order;
            yield this.connection.query(`INSERT INTO orders (id, userId, totalAmount) VALUES (?, ?, ?)`, [id, userId, totalAmount]);
            for (const product of order.products) {
                const orderItemId = (0, uuid_1.v4)(); //unique id for each order
                yield this.connection.query(`INSERT INTO order_items (id, orderId, productId, quantity) VALUES (?, ?, ?, ?)`, [orderItemId, order.id, product.productId, product.quantity]);
            }
        });
        this.updateUser = (patch) => __awaiter(this, void 0, void 0, function* () {
            this.logRequest("updateUser", { patch });
            const fields = [];
            const values = [];
            if (patch.email) {
                fields.push("email = ?");
                values.push(patch.email);
            }
            if (patch.password) {
                fields.push("password = ?");
                values.push(patch.password);
            }
            if (fields.length > 0) {
                yield this.connection.query(`UPDATE users SET ${fields.join(", ")} WHERE id = ?`, [...values, patch.id]);
            }
        });
        this.deleteOrder = (id) => __awaiter(this, void 0, void 0, function* () {
            this.logRequest("deleteOrder", { id });
            yield this.connection.query(`DELETE FROM order_items WHERE orderId = ?`, [id]);
            yield this.connection.query(`DELETE FROM orders WHERE id = ?`, [id]);
        });
        this.init();
    }
    logRequest(endpoint, params) {
        MySqlDB.requestCount++;
        logger_1.default.info(`Request to ${endpoint}. Parameters: ${JSON.stringify(params)}. Total requests: ${MySqlDB.requestCount}`);
    }
    queryProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRequest("queryProductById", { productId });
            return (yield this.connection.query(`SELECT * FROM products WHERE id = ?`, [productId]))[0][0];
        });
    }
    queryRandomProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRequest("queryRandomProduct");
            return (yield this.connection.query(`SELECT * FROM products ORDER BY RAND() LIMIT 1;`))[0][0];
        });
    }
    queryOrdersByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRequest("queryOrdersByUser", { userId });
            return (yield this.connection.query(`SELECT * FROM orders WHERE userId = ?`, [userId]))[0];
        });
    }
}
MySqlDB.requestCount = 0;
exports.default = MySqlDB;
//# sourceMappingURL=mysql_db.js.map