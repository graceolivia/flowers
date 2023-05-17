import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  const flower = await db.flower.findUnique({
    where: { id: params.flowersId },
  });
  if (!flower) {
    throw new Error("Flower not found");
  }
  return json({ flower: flower });
};

export default function FlowerRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <p>Here's your flower:</p>
      <p>{data.flower.content}</p>
      <Link to=".">"{data.flower.name}" Permalink</Link>
    </div>
  );
}
