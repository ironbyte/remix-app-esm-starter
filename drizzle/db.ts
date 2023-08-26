import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const migrationClient = postgres(process.env.DATABASE_DIRECT_URL || '', {
  max: 1,
});

await migrate(drizzle(migrationClient), {
  migrationsFolder: './drizzle/migrations',
});

const queryClient = postgres(process.env.DATABASE_DIRECT_URL || '');

export const db: PostgresJsDatabase = drizzle(queryClient, {
  logger: true,
});
