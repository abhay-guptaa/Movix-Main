import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        console.warn("⚠️  Server will continue running but database features will not work.");
        console.warn("⚠️  Please install and start MongoDB to enable full functionality.");
        console.warn("\nTo install MongoDB:");
        console.warn("1. Download from: https://www.mongodb.com/try/download/community");
        console.warn("2. Install MongoDB Community Edition");
        console.warn("3. Start MongoDB service:");
        console.warn("   - Windows: net start MongoDB (or start from Services)");
        console.warn("   - Mac/Linux: sudo systemctl start mongod\n");
    }
};

export default connectDB;
