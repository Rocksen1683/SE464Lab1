"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDefinition = exports.Users = exports.User = exports.UserPatchRequest = exports.UserRequest = exports.Categories = exports.Category = exports.Orders = exports.OrderRequest = exports.Order = exports.OrderProduct = exports.Products = exports.Product = exports.ProductRequest = exports.AllProductsRequest = exports.EmptyResponse = exports.EmptyRequest = exports.protobufPackage = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const Long = require("long");
exports.protobufPackage = "";
function createBaseEmptyRequest() {
    return {};
}
exports.EmptyRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.EmptyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseEmptyRequest();
        return message;
    },
};
function createBaseEmptyResponse() {
    return {};
}
exports.EmptyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.EmptyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseEmptyResponse();
        return message;
    },
};
function createBaseAllProductsRequest() {
    return { categoryId: undefined };
}
exports.AllProductsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.categoryId !== undefined) {
            writer.uint32(10).string(message.categoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllProductsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.categoryId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { categoryId: isSet(object.categoryId) ? globalThis.String(object.categoryId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.categoryId !== undefined) {
            obj.categoryId = message.categoryId;
        }
        return obj;
    },
    create(base) {
        return exports.AllProductsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAllProductsRequest();
        message.categoryId = (_a = object.categoryId) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseProductRequest() {
    return { productId: "" };
}
exports.ProductRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.productId !== "") {
            writer.uint32(10).string(message.productId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.productId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { productId: isSet(object.productId) ? globalThis.String(object.productId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.productId !== "") {
            obj.productId = message.productId;
        }
        return obj;
    },
    create(base) {
        return exports.ProductRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseProductRequest();
        message.productId = (_a = object.productId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseProduct() {
    return { categoryId: "", stock: 0, price: 0, description: "", id: "", name: "" };
}
exports.Product = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.categoryId !== "") {
            writer.uint32(10).string(message.categoryId);
        }
        if (message.stock !== 0) {
            writer.uint32(24).int64(message.stock);
        }
        if (message.price !== 0) {
            writer.uint32(32).int64(message.price);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.id !== "") {
            writer.uint32(50).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(58).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProduct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.categoryId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.stock = longToNumber(reader.int64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.price = longToNumber(reader.int64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            categoryId: isSet(object.categoryId) ? globalThis.String(object.categoryId) : "",
            stock: isSet(object.stock) ? globalThis.Number(object.stock) : 0,
            price: isSet(object.price) ? globalThis.Number(object.price) : 0,
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.categoryId !== "") {
            obj.categoryId = message.categoryId;
        }
        if (message.stock !== 0) {
            obj.stock = Math.round(message.stock);
        }
        if (message.price !== 0) {
            obj.price = Math.round(message.price);
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.Product.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseProduct();
        message.categoryId = (_a = object.categoryId) !== null && _a !== void 0 ? _a : "";
        message.stock = (_b = object.stock) !== null && _b !== void 0 ? _b : 0;
        message.price = (_c = object.price) !== null && _c !== void 0 ? _c : 0;
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.id = (_e = object.id) !== null && _e !== void 0 ? _e : "";
        message.name = (_f = object.name) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseProducts() {
    return { products: [] };
}
exports.Products = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.products) {
            exports.Product.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProducts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.products.push(exports.Product.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            products: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.products) ? object.products.map((e) => exports.Product.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.products) === null || _a === void 0 ? void 0 : _a.length) {
            obj.products = message.products.map((e) => exports.Product.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Products.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseProducts();
        message.products = ((_a = object.products) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Product.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOrderProduct() {
    return { productId: "", quantity: 0 };
}
exports.OrderProduct = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.productId !== "") {
            writer.uint32(10).string(message.productId);
        }
        if (message.quantity !== 0) {
            writer.uint32(16).int64(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderProduct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.productId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.quantity = longToNumber(reader.int64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            productId: isSet(object.productId) ? globalThis.String(object.productId) : "",
            quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.productId !== "") {
            obj.productId = message.productId;
        }
        if (message.quantity !== 0) {
            obj.quantity = Math.round(message.quantity);
        }
        return obj;
    },
    create(base) {
        return exports.OrderProduct.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrderProduct();
        message.productId = (_a = object.productId) !== null && _a !== void 0 ? _a : "";
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseOrder() {
    return { userId: "", id: "", products: [], totalAmount: 0 };
}
exports.Order = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        for (const v of message.products) {
            exports.OrderProduct.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalAmount !== 0) {
            writer.uint32(32).int64(message.totalAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.products.push(exports.OrderProduct.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.totalAmount = longToNumber(reader.int64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            products: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.products)
                ? object.products.map((e) => exports.OrderProduct.fromJSON(e))
                : [],
            totalAmount: isSet(object.totalAmount) ? globalThis.Number(object.totalAmount) : 0,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if ((_a = message.products) === null || _a === void 0 ? void 0 : _a.length) {
            obj.products = message.products.map((e) => exports.OrderProduct.toJSON(e));
        }
        if (message.totalAmount !== 0) {
            obj.totalAmount = Math.round(message.totalAmount);
        }
        return obj;
    },
    create(base) {
        return exports.Order.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseOrder();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.products = ((_c = object.products) === null || _c === void 0 ? void 0 : _c.map((e) => exports.OrderProduct.fromPartial(e))) || [];
        message.totalAmount = (_d = object.totalAmount) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseOrderRequest() {
    return { id: "" };
}
exports.OrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.OrderRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrderRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseOrders() {
    return { orders: [] };
}
exports.Orders = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            exports.Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(exports.Order.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { orders: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => exports.Order.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.orders) === null || _a === void 0 ? void 0 : _a.length) {
            obj.orders = message.orders.map((e) => exports.Order.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Orders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrders();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Order.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCategory() {
    return { description: "", id: "", name: "" };
}
exports.Category = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCategory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.Category.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCategory();
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCategories() {
    return { categories: [] };
}
exports.Categories = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.categories) {
            exports.Category.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCategories();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.categories.push(exports.Category.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            categories: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.categories)
                ? object.categories.map((e) => exports.Category.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.categories) === null || _a === void 0 ? void 0 : _a.length) {
            obj.categories = message.categories.map((e) => exports.Category.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Categories.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCategories();
        message.categories = ((_a = object.categories) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Category.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUserRequest() {
    return { id: "" };
}
exports.UserRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.UserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUserRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUserPatchRequest() {
    return { id: "", email: "", password: "" };
}
exports.UserPatchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.password !== "") {
            writer.uint32(26).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserPatchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            password: isSet(object.password) ? globalThis.String(object.password) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        return obj;
    },
    create(base) {
        return exports.UserPatchRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUserPatchRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.email = (_b = object.email) !== null && _b !== void 0 ? _b : "";
        message.password = (_c = object.password) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUser() {
    return { id: "", email: "", name: "" };
}
exports.User = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.User.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUser();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.email = (_b = object.email) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUsers() {
    return { users: [] };
}
exports.Users = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.users) {
            exports.User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUsers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.users.push(exports.User.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { users: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.users) ? object.users.map((e) => exports.User.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.users) === null || _a === void 0 ? void 0 : _a.length) {
            obj.users = message.users.map((e) => exports.User.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Users.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUsers();
        message.users = ((_a = object.users) === null || _a === void 0 ? void 0 : _a.map((e) => exports.User.fromPartial(e))) || [];
        return message;
    },
};
exports.AppDefinition = {
    name: "App",
    fullName: "App",
    methods: {
        getProduct: {
            name: "GetProduct",
            requestType: exports.ProductRequest,
            requestStream: false,
            responseType: exports.Product,
            responseStream: false,
            options: {},
        },
        getRandomProduct: {
            name: "GetRandomProduct",
            requestType: exports.EmptyRequest,
            requestStream: false,
            responseType: exports.Product,
            responseStream: false,
            options: {},
        },
        getAllProducts: {
            name: "GetAllProducts",
            requestType: exports.AllProductsRequest,
            requestStream: false,
            responseType: exports.Products,
            responseStream: false,
            options: {},
        },
        getAllCategories: {
            name: "GetAllCategories",
            requestType: exports.EmptyRequest,
            requestStream: false,
            responseType: exports.Categories,
            responseStream: false,
            options: {},
        },
        getAllOrders: {
            name: "GetAllOrders",
            requestType: exports.EmptyRequest,
            requestStream: false,
            responseType: exports.Orders,
            responseStream: false,
            options: {},
        },
        getAllUserOrders: {
            name: "GetAllUserOrders",
            requestType: exports.UserRequest,
            requestStream: false,
            responseType: exports.Orders,
            responseStream: false,
            options: {},
        },
        getOrder: {
            name: "GetOrder",
            requestType: exports.OrderRequest,
            requestStream: false,
            responseType: exports.Order,
            responseStream: false,
            options: {},
        },
        getUser: {
            name: "GetUser",
            requestType: exports.UserRequest,
            requestStream: false,
            responseType: exports.User,
            responseStream: false,
            options: {},
        },
        getAllUsers: {
            name: "GetAllUsers",
            requestType: exports.EmptyRequest,
            requestStream: false,
            responseType: exports.Users,
            responseStream: false,
            options: {},
        },
        postOrder: {
            name: "PostOrder",
            requestType: exports.Order,
            requestStream: false,
            responseType: exports.Order,
            responseStream: false,
            options: {},
        },
        patchAccountDetails: {
            name: "PatchAccountDetails",
            requestType: exports.UserPatchRequest,
            requestStream: false,
            responseType: exports.User,
            responseStream: false,
            options: {},
        },
        deleteOrder: {
            name: "DeleteOrder",
            requestType: exports.OrderRequest,
            requestStream: false,
            responseType: exports.EmptyResponse,
            responseStream: false,
            options: {},
        },
    },
};
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=app.js.map