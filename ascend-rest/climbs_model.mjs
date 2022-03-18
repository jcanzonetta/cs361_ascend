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
  photos: { type: Array, required: false },
  route_name: { type: String, required: true },
  grade: { type: Object, required: false },
  safety: { type: String, required: true },
  type: { type: Object, required: true },
  description: { type: Array, required: true },
  location: { type: Array, required: true },
  protection: { type: Array, required: true },
  metadata: { type: Object, required: false },
});

const Climb = mongoose.model("Climb", climbSchema, "climbs");

/**
 * Finds a climb or multiple climbs matching the passed filter.
 * @param filter
 * @returns
 */
const findClimbs = async (filter) => {
  const query = Climb.find();
  if (Object.keys(filter).length > 0) {
    // Check if the query is a search.
    for (const key in filter) {
      if (key == "search") {
        query.and({ $text: { $search: filter[key] } });
      } else {
        query.and({ key: filter[key] });
      }
    }
  }
  return query.exec();
};

const findClimb = async (filter) => {
  return Climb.findById(filter).exec();
};

export { findClimbs, findClimb };
