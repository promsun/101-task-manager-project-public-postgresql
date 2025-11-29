const port = parseInt(process.env.PORT, 10) || 3000;

module.exports = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: port,
  corsOrigin: process.env.CORS_ORIGIN || "*",
  serverUrl: process.env.SERVER_URL || `http://localhost:${port}`,
  appInfo: {
    name: "Task Manager API",
    version: "1.0.0",
    description: "A RESTful API for managing tasks with PostgreSQL database",
  },
};
