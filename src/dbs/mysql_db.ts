import { Product } from "../compiled_proto/app";
import { IDatabase } from "../interfaces";
import { Category, Order, User, UserPatchRequest } from "../types";
import { v4 as uuidv4 } from 'uuid'; 
import mysql from "mysql2/promise";
import { logger } from "../logger";

export default class MySqlDB implements IDatabase {
  connection: mysql.Connection;

  async init() {
    this.connection = await mysql.createConnection({
      host: process.env.RDS_HOSTNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: parseInt(process.env.RDS_PORT), // Default to 3306 if port is not specified
      database: process.env.RDS_DATABASE,
    });
    logger.info("MySQL connected!");
  }

  constructor() {
    this.init();
  }

  async queryProductById(productId: string) {
    return (await this.connection.query(SELECT * FROM products WHERE id = ?, [productId]))[0][0] as Product;
  }

  async queryRandomProduct() {
    return (await this.connection.query(SELECT * FROM products ORDER BY RAND() LIMIT 1;))[0][0] as Product;
  }

  queryAllProducts = async (categoryId?: string) => {
    if (categoryId) {
      return (await this.connection.query(SELECT * FROM products WHERE categoryId = ?, [categoryId]))[0] as Product[];
    } else {
      return (await this.connection.query(SELECT * FROM products))[0] as Product[];
    }
  }

  queryAllCategories = async () => {
    return (await this.connection.query("SELECT * FROM categories;"))[0] as Category[];
  }

  queryAllOrders = async () => {
    return (await this.connection.query("SELECT * FROM orders;"))[0] as Order[];
  }

  async queryOrdersByUser(userId: string) {
    return (await this.connection.query(SELECT * FROM orders WHERE userId = ?, [userId]))[0] as Order[];
  }

  queryOrderById = async (id: string) => {
    return (await this.connection.query(SELECT * FROM orders WHERE id = ?, [id]))[0][0];
  }

  queryUserById = async (id: string) => {
    return (await this.connection.query(SELECT id, email, name FROM users WHERE id = ?, [id]))[0][0];
  }

  queryAllUsers = async () => {
    return (await this.connection.query("SELECT id, name, email FROM users"))[0] as User[];
  }

  insertOrder = async (order: Order) => {
    const { id, userId, totalAmount } = order;
    await this.connection.query(
      INSERT INTO orders (id, userId, totalAmount) VALUES (?, ?, ?),
      [id, userId, totalAmount]
    );
  
    for (const product of order.products) {
      const orderItemId = uuidv4(); //unique id for each order
      await this.connection.query(
        INSERT INTO order_items (id, orderId, productId, quantity) VALUES (?, ?, ?, ?),
        [orderItemId, order.id, product.productId, product.quantity]
      );
    }
  }
  
  updateUser = async (patch: UserPatchRequest) => {
    const fields: string[] = [];
    const values: any[] = [];
  
    if (patch.email) {
      fields.push("email = ?");
      values.push(patch.email);
    }
  
    if (patch.password) {
      fields.push("password = ?");
      values.push(patch.password); 
    }
  
    if (fields.length > 0) {
      await this.connection.query(
        UPDATE users SET ${fields.join(", ")} WHERE id = ?,
        [...values, patch.id]
      );
    }
  };
  

  deleteOrder = async (id: string) => {
    await this.connection.query(DELETE FROM order_items WHERE orderId = ?, [id]);
    await this.connection.query(DELETE FROM orders WHERE id = ?, [id]);
  }
}
