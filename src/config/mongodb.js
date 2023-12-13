import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);

var database = mongoose.connection;

export default database;