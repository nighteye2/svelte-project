import { f as fail, r as redirect } from "../../../chunks/index.js";
import bcrypt from "bcrypt";
import { d as db } from "../../../chunks/database.js";
const load = async () => {
};
const register = async ({ request }) => {
  const data = await request.formData();
  const username = data.get("username");
  const password = data.get("password");
  if (typeof username !== "string" || typeof password !== "string" || !username || !password) {
    return fail(400, { invalid: true });
  }
  const user = await db.user.findUnique({
    where: { username }
  });
  if (user) {
    return fail(400, { user: true });
  }
  await db.user.create({
    data: {
      username,
      passwordHash: await bcrypt.hash(password, 10),
      userAuthToken: crypto.randomUUID()
    }
  });
  redirect(303, "/login");
};
const actions = { register };
export {
  actions,
  load
};
