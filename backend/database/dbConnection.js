


import mongoose from "mongoose";

export const dbConnection = () => {
  console.log("MONGO_URI:", process.env.MONGO_URI); // Debug log
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database successfully!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to database: ${err}`);
    });
};