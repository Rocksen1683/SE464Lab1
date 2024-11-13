"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const winston_cloudwatch_1 = __importDefault(require("winston-cloudwatch"));
// Create a Winston logger
const logger = winston_1.default.createLogger({
    level: 'info', // Set the desired log level
    format: winston_1.default.format.json(),
    defaultMeta: { service: 'express-app' }, // Customize as needed
    transports: [
        // Output logs to the console for local development
        new winston_1.default.transports.Console(),
        // Send logs to CloudWatch Logs
        new winston_cloudwatch_1.default({
            logGroupName: 'server-logs',
            logStreamName: 'server-logs',
            awsRegion: 'us-east-1', // Shouldn't have to replace this
            jsonMessage: true, // Ensure logs are formatted as JSON
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map