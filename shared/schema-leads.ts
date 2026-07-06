import { mysqlTable, varchar, timestamp, int } from 'drizzle-orm/mysql-core';

export const leads = mysqlTable('leads', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  source: varchar('source', { length: 100 }).notNull(), // e.g., 'deck_maintenance_checklist', 'bathroom_guide', etc.
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
