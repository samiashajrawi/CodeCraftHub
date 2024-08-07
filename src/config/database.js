const mongoose = require('mongoose');
const User = require('../models/userModel');
const mongoUrl = process.env.MONGO_URL || 'mongodb://root:MjkwMTgtc2FtaWFz@localhost:27017';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;