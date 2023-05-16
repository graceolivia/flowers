import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div>
      <h1>Helo</h1>

      <p>Gorgeous flowers for sale</p>
      <li>
        <Link to="flowers">Find flowers!????</Link>
      </li>
    </div>
  );
}
