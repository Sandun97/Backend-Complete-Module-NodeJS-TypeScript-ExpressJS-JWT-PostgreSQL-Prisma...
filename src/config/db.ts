import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("✅ DB connected via Prisma");
    } catch (err) {
        if (err instanceof Error) {
            console.log("❌ DB connection error: " + err.message);
        } else {
            console.log("❌ DB connection error: Unknown error");
        }
        process.exit(1);
    }
};

const disconnectDB = async () => {
    try {
        await prisma.$disconnect();
        console.log("ℹ️ DB disconnected");
    } catch (err) {
        if (err instanceof Error) {
            console.log("❌ DB connection error: " + err.message);
        } else {
            console.log("❌ DB connection error: Unknown error");
        }
    }
};

export { prisma, connectDB, disconnectDB };