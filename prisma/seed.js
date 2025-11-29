const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seedTasks = [
  {
    title: "Buy groceries",
    description: "Milk, Bread, Eggs",
    status: "pending",
  },
  {
    title: "Clean the house",
    description: "Vacuum and dust the living room",
    status: "completed",
  },
  {
    title: "Finish the report",
    description: "Complete the annual financial report",
    status: "pending",
  },
];

const main = async () => {
  console.log("🌱 Seeding database...");

  for (const task of seedTasks) {
    await prisma.task.create({
      data: task,
    });
  }

  console.log("✅ Seeding completed!");
};

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
