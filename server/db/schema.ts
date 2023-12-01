import { sqliteTable, text, integer, unique } from 'drizzle-orm/sqlite-core'
import { ROLE_DEFAULT } from '~/constants';

const COMMENT_STATUS_SUBMITTED = "submitted";
const COMMENT_STATUS_APPROVED = "approved";
const COMMENT_STATUS_REJECTED = "rejected";

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').unique(),
  role: text('role').default(ROLE_DEFAULT),
  isActive: integer('is_active', { mode: 'boolean' }),
  createdDate: integer('created_date', { mode: 'timestamp' }),
  updatedDate: integer('updated_date', { mode: 'timestamp' }),
})

export const comments = sqliteTable('comments', {
  id: integer('id').primaryKey(),
  authorId: integer("author_id").references(() => users.id),
  body: text('body').notNull(),
  status: text('status').notNull().default(COMMENT_STATUS_SUBMITTED),
  actionById: integer("action_by_id").references(() => users.id),
  createdDate: integer('created_date', { mode: 'timestamp' }),
  updatedDate: integer('updated_date', { mode: 'timestamp' }),
}, (table) => ({
  uniqueAuthor: unique().on(table.authorId)
}))

export const statusHistory = sqliteTable('statusHistory', {
  id: integer('id').primaryKey(),
  from: text('from').notNull(),
  to: text('to').notNull(),
  createdDate: integer('created_date', { mode: 'timestamp' }),
  commentId: integer("comment_id").references(() => comments.id),
})
