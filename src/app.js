const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const { swaggerSpec } = require("./config/swagger.config");
const { nodeEnv, corsOrigin, appInfo } = require("./config/app.config");
const taskRoutes = require("./routes/task.routes");

const app = express();

// Middleware
app.use(cors({ origin: corsOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(nodeEnv === "development" ? "dev" : "combined"));

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    name: appInfo.name,
    version: appInfo.version,
    description: appInfo.description,
    status: "running",
    timestamp: new Date().toISOString(),
    environment: nodeEnv,
    documentation: "/api-docs",
  });
});

// API Routes
app.use("/api/tasks", taskRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Not Found",
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Handle Prisma errors
  if (err.code === "P2025") {
    statusCode = 404;
    message = "Record not found";
  } else if (err.code === "P2002") {
    statusCode = 409;
    message = "Record already exists";
  } else if (err.code === "P2003") {
    statusCode = 400;
    message = "Foreign key constraint failed";
  } else if (err.name === "PrismaClientValidationError") {
    statusCode = 400;
    message = "Invalid input data";
  }

  res.status(statusCode).json({
    success: false,
    error: message,
    stack: nodeEnv === "development" ? err.stack : undefined,
  });
});

module.exports = app;
