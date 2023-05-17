import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getFlowers().map((flower) => {
      return db.flower.create({ data: flower });
    })
  );
}

seed();

function getFlowers() {
  return [
    {
      name: "Rose",
      content: `🌹`,
    },
    {
      name: "Daisy",
      content: `🌼`,
    },
    {
      name: "Sunflower",
      content: `🌻`,
    },
    {
      name: "Hibiscus",
      content: `🌺`,
    },
    {
      name: "Water Lily",
      content: `🪷`,
    },
    {
      name: "Tulip",
      content: `🌷`,
    },
  ];
}
