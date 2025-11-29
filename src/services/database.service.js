const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const connectDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    return false;
  }
};

const disconnectDatabase = async () => {
  await prisma.$disconnect();
  console.log("✅ Database disconnected");
};

module.exports = { prisma, connectDatabase, disconnectDatabase };
