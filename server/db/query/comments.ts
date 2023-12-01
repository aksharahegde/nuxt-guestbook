import { desc, eq } from "drizzle-orm";

export const upsertComment = async (payload: any) =>
  await useDB()
    .insert(tables.comments)
    .values(payload)
    .onConflictDoUpdate({
      target: tables.comments.authorId,
      set: { body: payload.body },
    })
    .returning()
    .get();

export const updateComment = async (payload: any, filterBy: any) =>
  await useDB()
    .update(tables.comments)
    .set(payload)
    .where(filterBy)
    .returning()
    .get();

export const getComments = async (
  filterBy: any,
  orderBy: any,
  offset: any,
  limit: any
) =>
  await useDB()
    .select()
    .from(tables.comments)
    .where(filterBy)
    .orderBy(orderBy)
    .limit(limit)
    .offset(offset)
    .all();

export const getStatusHistory = async (commentId: any) =>
  await useDB()
    .select()
    .from(tables.statusHistory)
    .where(eq(tables.statusHistory.commentId, commentId))
    .orderBy(desc(tables.statusHistory.createdDate))
    .all();
