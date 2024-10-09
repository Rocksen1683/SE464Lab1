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
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
class DynamoDB {
    constructor() {
        const client = new client_dynamodb_1.DynamoDBClient({ region: process.env.AWS_REGION });
        this.docClient = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
        console.log("DynamoDB connected!");
    }
    ;
    queryRandomProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            // Query to get a random product by scanning all products and picking one
            const command = new lib_dynamodb_1.ScanCommand({
                TableName: "Products",
            });
            const response = yield this.docClient.send(command);
            const products = response.Items;
            if (products.length > 0) {
                const randomIndex = Math.floor(Math.random() * products.length);
                return products[randomIndex];
            }
            throw new Error("No products found");
        });
    }
    ;
    queryProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const command = new lib_dynamodb_1.GetCommand({
                TableName: "Products",
                Key: {
                    id: productId,
                },
            });
            const response = yield this.docClient.send(command);
            return response.Item;
        });
    }
    ;
    queryAllProducts(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                TableName: "Products",
            };
            if (category) {
                params.FilterExpression = "categoryId = :category";
                params.ExpressionAttributeValues = {
                    ":category": category,
                };
            }
            const command = new lib_dynamodb_1.ScanCommand(params);
            const response = yield this.docClient.send(command);
            return response.Items;
        });
    }
    ;
    queryAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const command = new lib_dynamodb_1.ScanCommand({
                TableName: "Categories",
            });
            const response = yield this.docClient.send(command);
            return response.Items;
        });
    }
    ;
    queryAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            const command = new lib_dynamodb_1.ScanCommand({
                TableName: "Orders",
            });
            const response = yield this.docClient.send(command);
            return response.Items;
        });
    }
    ;
    queryOrdersByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const command = new lib_dynamodb_1.ScanCommand({
                TableName: "Orders",
                FilterExpression: "userId = :userId",
                ExpressionAttributeValues: {
                    ":userId": userId,
                },
            });
            const response = yield this.docClient.send(command);
            return response.Items;
        });
    }
    ;
    queryOrderById(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const command = new lib_dynamodb_1.GetCommand({
                TableName: "Orders",
                Key: {
                    id: orderId,
                },
            });
            const response = yield this.docClient.send(command);
            return response.Item;
        });
    }
    ;
    queryUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const command = new lib_dynamodb_1.GetCommand({
                TableName: "Users",
                Key: {
                    id: userId,
                },
                ProjectionExpression: 'id, #n, email',
                ExpressionAttributeNames: { "#n": "name" },
            });
            const response = yield this.docClient.send(command);
            return response.Item;
        });
    }
    ;
    queryAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const command = new lib_dynamodb_1.ScanCommand({
                TableName: "Users",
                ProjectionExpression: 'id, #n, email',
                ExpressionAttributeNames: { "#n": "name" },
            });
            const response = yield this.docClient.send(command);
            return response.Items;
        });
    }
    ;
    insertOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const command = new lib_dynamodb_1.PutCommand({
                TableName: "Orders",
                Item: {
                    id: order.id,
                    userId: order.userId,
                    totalAmount: order.totalAmount,
                    products: order.products.map(product => ({
                        productId: product.productId,
                        quantity: product.quantity,
                    }))
                }
            });
            yield this.docClient.send(command);
            console.log("Order inserted successfully");
            // Optionally delete the order after insertion
            yield this.deleteOrder(order.id);
        });
    }
    ;
    updateUser(patch) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateExpressions = [];
            const expressionAttributeValues = {};
            if (patch.email) {
                updateExpressions.push("email = :email");
                expressionAttributeValues[":email"] = patch.email;
            }
            if (patch.password) {
                updateExpressions.push("password = :password");
                expressionAttributeValues[":password"] = patch.password; // Assuming password is already hashed
            }
            if (updateExpressions.length === 0) {
                throw new Error("No fields to update.");
            }
            const command = new lib_dynamodb_1.UpdateCommand({
                TableName: "Users",
                Key: { id: patch.id },
                UpdateExpression: `SET ${updateExpressions.join(", ")}`,
                ExpressionAttributeValues: expressionAttributeValues,
            });
            yield this.docClient.send(command);
            console.log("User updated successfully");
        });
    }
    ;
    deleteOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const command = new lib_dynamodb_1.DeleteCommand({
                TableName: "Orders",
                Key: {
                    id: id,
                },
            });
            yield this.docClient.send(command);
            console.log("Order deleted successfully");
        });
    }
    ;
}
exports.default = DynamoDB;
;
//# sourceMappingURL=dynamo_db.js.map