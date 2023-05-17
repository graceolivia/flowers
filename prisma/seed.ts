import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getJokes().map((joke) => {
      return db.joke.create({ data: joke });
    })
  );
}

seed();

function getJokes() {
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
