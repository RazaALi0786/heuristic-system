import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI as string | undefined;

  if (!MONGODB_URI) {
    // Avoid throwing at import/build time. Throwing here makes it a runtime error
    // only when an API route attempts to connect without configuration.
    throw new Error(
      "⚠️ Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
