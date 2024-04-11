import { pgTable, text } from 'drizzle-orm/pg-core';


export const sampleTable = pgTable('sample', {
	id: text('id').primaryKey(),
	name: text('name').notNull()
});
