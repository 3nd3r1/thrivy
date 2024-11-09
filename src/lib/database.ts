import mongoose, { Mongoose } from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL || "";

if (!DATABASE_URL) {
    throw new Error("Please define the DATABASE_URL environment variable.");
}

// Add a custom property to the NodeJS global interface to handle the mongoose connection cache
declare global {
    var mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null };
}

// Check if the connection is already cached, otherwise initialize it
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(DATABASE_URL).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectToDatabase;
