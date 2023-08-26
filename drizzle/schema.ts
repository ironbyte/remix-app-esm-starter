import { pgTable, timestamp, text, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

// https://orm.drizzle.team/docs/zod

export const users = pgTable('users', {
  id: varchar('id', { length: 14 }).primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  passwordHash: text('password_hash').notNull(),
});

// Schema for inserting a user - can be used to validate API requests
export const insertUserSchema = createInsertSchema(users, {
  email: (schema) => schema.email.email('Email address is not valid'),
});
