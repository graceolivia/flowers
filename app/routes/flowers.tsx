import type { LinksFunction } from "@remix-run/node";
import { Link, LiveReload, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import stylesUrl from "~/styles/flowers.css";
import { db } from "~/utils/db.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const loader = async () => {
  return json({
    flowerListItems: await db.flower.findMany(),
  });
};

export default function FlowersRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>FL🌸WERS</h1>
      <h2>hi</h2>
      <main className="flowers-main">
        <div className="container">
          <div className="flowers-list">
            <Link to=".">Get a random flower</Link>
            <p>Here are a few more flowers to check out:</p>
            <ul>
              {data.flowerListItems.map(({ id, name, content }) => (
                <li key={id}>
                  <Link to={id}>{name}</Link>
                </li>
              ))}
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="flowers-outlet">
            <Outlet />
            <LiveReload />
          </div>
        </div>
      </main>
    </div>
  );
}
