import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { IDatabase } from "../interfaces";
import { GetCommand, ScanCommand, PutCommand, UpdateCommand, DynamoDBDocumentClient, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { Category, Order, Product, User, UserPatchRequest } from "../types";

export default class DynamoDB implements IDatabase {
  docClient: DynamoDBDocumentClient;

  constructor() {
    const client = new DynamoDBClient({ region: process.env.AWS_REGION });
    this.docClient = DynamoDBDocumentClient.from(client);
    console.log("DynamoDB connected!");
  };

  async queryRandomProduct() {
    // Query to get a random product by scanning all products and picking one
    const command = new ScanCommand({
      TableName: "Products",
    });

    const response = await this.docClient.send(command);
    const products = response.Items as Product[];
    if (products.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.length);
      return products[randomIndex];
    }
    throw new Error("No products found");
  };

  async queryProductById(productId: string) {
    const command = new GetCommand({
      TableName: "Products",
      Key: {
        id: productId,
      },
    });

    const response = await this.docClient.send(command);
    return response.Item as Product;
  };

  async queryAllProducts(category?: string) {
    const params: any = {
      TableName: "Products",
    };

    if (category) {
      params.FilterExpression = "categoryId = :category";
      params.ExpressionAttributeValues = {
        ":category": category,
      };
    }

    const command = new ScanCommand(params);
    const response = await this.docClient.send(command);
    return response.Items as Product[];
  };

  async queryAllCategories() {
    const command = new ScanCommand({
      TableName: "Categories",
    });

    const response = await this.docClient.send(command);
    return response.Items as Category[];
  };

  async queryAllOrders() {
    const command = new ScanCommand({
      TableName: "Orders",
    });

    const response = await this.docClient.send(command);
    return response.Items as Order[];
  };

  async queryOrdersByUser(userId: string) {
    const command = new ScanCommand({
      TableName: "Orders",
      FilterExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": userId,
      },
    });

    const response = await this.docClient.send(command);
    return response.Items as Order[];
  };

  async queryOrderById(orderId: string) {
    const command = new GetCommand({
      TableName: "Orders",
      Key: {
        id: orderId,
      },
    });

    const response = await this.docClient.send(command);
    return response.Item as Order;
  };

  async queryUserById(userId: string) {
    const command = new GetCommand({
      TableName: "Users",
      Key: {
        id: userId,
      },
      ProjectionExpression: 'id, #n, email',
      ExpressionAttributeNames: { "#n": "name" },
    });

    const response = await this.docClient.send(command);
    return response.Item as User;
  };

  async queryAllUsers() {
    const command = new ScanCommand({
      TableName: "Users",
      ProjectionExpression: 'id, #n, email',
      ExpressionAttributeNames: { "#n": "name" },
    });

    const response = await this.docClient.send(command);
    return response.Items as User[];
  };

  async insertOrder(order: Order): Promise<void> {
    const command = new PutCommand({
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

    await this.docClient.send(command);
    console.log("Order inserted successfully");

    // Optionally delete the order after insertion
    await this.deleteOrder(order.id);
};


async updateUser(patch: UserPatchRequest): Promise<void> {
  const updateExpressions = [];
  const expressionAttributeValues: any = {};

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

  const command = new UpdateCommand({
    TableName: "Users",
    Key: { id: patch.id },
    UpdateExpression: `SET ${updateExpressions.join(", ")}`,
    ExpressionAttributeValues: expressionAttributeValues,
  });

  await this.docClient.send(command);
  console.log("User updated successfully");
};


  async deleteOrder(id: string): Promise<void> {
    const command = new DeleteCommand({
      TableName: "Orders",
      Key: {
        id: id,
      },
    });
    await this.docClient.send(command);
    console.log("Order deleted successfully");
  };
};
