import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rafa1807:123@alura.joloi.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;