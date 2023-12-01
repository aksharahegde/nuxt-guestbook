import { z } from "zod";
import { upsertComment } from "../db/query/comments";

export default eventHandler(async (event) => {
  const { body } = await readValidatedBody(
    event,
    z.object({
      body: z.string().trim().min(1),
    }).parse
  );
  const { user } = await requireUserSession(event);
  const payload = {
    body,
    authorId: user.id,
    createdDate: new Date(),
    updatedDate: new Date(),
  };
  return await upsertComment(payload);
});
