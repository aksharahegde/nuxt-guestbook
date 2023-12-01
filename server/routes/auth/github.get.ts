import { eq } from "drizzle-orm/sql";
import { ADMIN_ROLES } from "~/constants";
import { getUser, insertUser } from "~/server/db/query/users";
import { users } from "~/server/db/schema";

export default oauth.githubEventHandler({
  async onSuccess(event: any, { user }: any) {
    let redirectTo = "/";
    const filterBy = eq(users.email, user.email as string);
    let userDb: any = await getUser(filterBy);
    if (!userDb) {
      userDb = await insertUser(user);
    }

    await setUserSession(event, { user: userDb });
    if (ADMIN_ROLES.includes(userDb.role)) {
      redirectTo = "/admin";
    }
    return sendRedirect(event, redirectTo);
  },
});
