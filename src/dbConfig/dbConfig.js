import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME });
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB successfully connected!")
        })

        connection.on('error', (err) => {
            console.log("MongoDB connection error ||", err);
            process.exit();
        })


    } catch (error) {
        console.log("Something went wrong in mongoose connection:", error)
    }
}