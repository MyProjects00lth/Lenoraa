import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "Lenoraa"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log('connection successfuly...')
    } catch (error) {
        console.log(error)
    }
}