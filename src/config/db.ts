import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../schemas/prisma/generated/client/client.js';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});

const prisma = new PrismaClient({ adapter });

export default prisma;
