import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const kody = await db.user.create({
    data: {
      username: "kody",
      // this is a hashed version of "twixrox"
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  });

  await Promise.all(
    getFlowers().map((flower) => {
      const data = { userId: kody.id, ...flower };
      return db.flower.create({ data });
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
