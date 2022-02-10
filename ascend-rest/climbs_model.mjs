import mongoose from "mongoose";

// Connect to the database exercises_db in the MongoDB server running locally on port 27017
mongoose.connect("mongodb://localhost:27017/climbs_db", {
  useNewUrlParser: true,
});

// Connect to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const climbSchema = mongoose.Schema({
  name: { type: String, required: true },
  grade: { type: Number, required: true },
  runnout: { type: String, required: false },
  description: { type: String, required: true },
  tags: { type: Array, required: true },
});

/**
 * Finds a exercise or multiple exercises matching the passed filter.
 * @param filter
 * @returns
 */
const findClimbs = async (filter) => {
  const query = Climb.find();
  if (filter.length > 0) {
    query.and(filter);
  }
  return query.exec();
};
