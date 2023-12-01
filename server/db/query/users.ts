import { eq } from "drizzle-orm";
import { users } from "../schema";

export const allUsers = async () => await useDB().select().from(users).all();

export const getUser = async (filterBy: any) => {
  const results = await useDB().select().from(users).where(filterBy).all();
  return results[0];
};

export const insertUser = async (data: any) => {
  const payload: any = {
    ...data,
    isActive: true,
    createdDate: new Date(),
    updatedDate: new Date()
  };

  try {
    return await useDB().insert(users).values(payload).returning().get();
  } catch (err) {
    console.log("Failed to create user", err);
    return null;
  }
};

export const updateUser = async (data: any, userId: number) => {
  const updatedUser = await useDB()
    .update(tables.users)
    .set(data)
    .where(eq(tables.users.id, userId));
  return updatedUser;
};
