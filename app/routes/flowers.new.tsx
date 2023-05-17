import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { db } from "~/utils/db.server";

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const content = form.get("content");
  const name = form.get("name");
  // we do this type check to be extra sure and to make TypeScript happy
  // we'll explore validation next!
  if (typeof content !== "string" || typeof name !== "string") {
    throw new Error("Form not submitted correctly.");
  }

  const fields = { content, name };

  const flower = await db.flower.create({ data: fields });
  return redirect(`/flowers/${flower.id}`);
};

export default function NewJokeRoute() {
  return (
    <div>
      <p>Add a flower to the bouquet</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content (Emoji please): <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
