import type { LinksFunction } from "@remix-run/node";
import { Link, LiveReload, Outlet } from "@remix-run/react";

import stylesUrl from "~/styles/flowers.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function JokesRoute() {
  return (
    <div>
      <h1>FL🌸WERS</h1>
      <h2>hi</h2>
      <main>
        <Outlet />
        <LiveReload />
      </main>
    </div>
  );
}
