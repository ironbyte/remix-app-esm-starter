import { faker } from '@faker-js/faker';
import 'dotenv/config';
import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { customAlphabet } from 'nanoid';
import postgres from 'postgres';
import { type z } from 'zod';

import { users, type insertUserSchema } from '#drizzle/schema.ts';

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
const length = 14;

const nanoid = customAlphabet(alphabet, length);

function generatePublicId() {
  return nanoid();
}

const queryClient = postgres(process.env.DATABASE_URL || '');

const db: PostgresJsDatabase = drizzle(queryClient, {
  logger: true,
});

type UserToBeInserted = z.infer<typeof insertUserSchema>;

const generateUserRows = (count: number): UserToBeInserted[] => {
  const rows: UserToBeInserted[] = [];

  for (let i = 0; i < count; i++) {
    rows.push({
      id: generatePublicId(),
      email: faker.internet.email(),
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    });
  }

  return rows;
};

async function seed() {
  console.log('Seeding...');
  console.time('DB has been seeded!');

  // database teardown
  await db.delete(users);

  // database setup
  const newUserRows = generateUserRows(100);
  await db.insert(users).values(newUserRows).returning();
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Seeding done!');
    process.exit(0);
  });
