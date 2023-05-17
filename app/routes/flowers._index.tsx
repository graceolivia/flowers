import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const loader = async () => {
  const count = await db.flower.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomFlower] = await db.flower.findMany({
    skip: randomRowNumber,
    take: 1,
  });
  return json({ randomFlower: randomFlower });
};

export default function FlowersIndexRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <p>Here's a random flower:</p>
      <p>{data.randomFlower.content}</p>
      <Link to={data.randomFlower.id}>"{data.randomFlower.name}"</Link>
    </div>
  );
}
