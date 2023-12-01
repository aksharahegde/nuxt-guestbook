import { eq, and } from "drizzle-orm";
import { useValidation } from "../../utils/validate";
import { updateComment } from "../../db/query/comments";

export default eventHandler(async (event) => {
  const { getId, getName, getCommentBody, getStatus } = useValidation(event);
  const id = await getId();
  const name = await getName();
  const body = await getCommentBody();
  const status = await getStatus();

  const session = await requireUserSession(event);
  const payload = {
    name,
    body,
    status,
    actionById: session.user.id,
    updatedAt: new Date(),
  };
  return await updateComment(payload, and(eq(tables.comments.id, id)));
});
