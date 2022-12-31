import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT ?? '3000',
    DB_TYPE: process.env.DB_TYPE ?? 'sqlite',
    DB_NAME: process.env.DB_NAME ?? './db.sqlite3',
    DB_USERNAME: process.env.DB_USERNAME ?? 'root',
    DB_PASSWORD: process.env.DB_PASSWORD ?? '',
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ?? 'Add valid GOOGLE_CLIENT_ID to .env',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET ?? 'Add valid GOOGLE_SECRET to .env',
    JWT_SECRET: process.env.JWT_SECRET ?? 'insecure_secret',
    JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME ?? '30m'
};
