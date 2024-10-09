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
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../compiled_proto/app");
const nice_grpc_1 = require("nice-grpc");
class GrpcServiceImpl {
    constructor(db) {
        this.db = db;
    }
    getProduct(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.db.queryProductById(request.productId);
            return product;
        });
    }
    getRandomProduct(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.db.queryRandomProduct();
            return product;
        });
    }
    getAllProducts(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.db.queryAllProducts(request.categoryId);
            return { products };
        });
    }
    getAllCategories(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield this.db.queryAllCategories();
            return { categories };
        });
    }
    getAllOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.db.queryAllOrders();
            return { orders };
        });
    }
    getAllUserOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.db.queryOrdersByUser(request.id);
            return { orders };
        });
    }
    getOrder(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield this.db.queryOrderById(request.id);
            return order;
        });
    }
    getUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.db.queryUserById(request.id);
            return user;
        });
    }
    getAllUsers(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.db.queryAllUsers();
            return { users };
        });
    }
    postOrder(request) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.insertOrder(request);
            return request;
        });
    }
    patchAccountDetails(request) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.updateUser(request);
            const user = yield this.db.queryUserById(request.id);
            return user;
        });
    }
    deleteOrder(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request;
            try {
                yield this.db.deleteOrder(id);
                return {}; // EmptyResponse
            }
            catch (error) {
                throw error;
            }
        });
    }
}
;
class GrpcServer {
    constructor(db) {
        this.db = db;
        this.server = (0, nice_grpc_1.createServer)();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const port = 3001;
            this.server.add(app_1.AppDefinition, new GrpcServiceImpl(this.db));
            yield this.server.listen(`0.0.0.0:${port}`);
            console.log(`gRPC server listening on port ${port}`);
        });
    }
}
exports.default = GrpcServer;
;
//# sourceMappingURL=grpcServer.js.map