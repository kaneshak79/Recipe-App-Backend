// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB);
//     console.log("Connected to MONGODB");
//   } catch (error) {
//     console.error("MongoDB Connection Failed:", error.message);
//   }
// };

// // module.exports=connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;