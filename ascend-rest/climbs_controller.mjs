import * as climbs from "./climbs_model.mjs";
import express, { query } from "express";
const app = express();

const PORT = 3000;

app.use(express.json());

/**
 * Retrieves the climb(s) that match the query parameters.
 */
app.get("/climbs", (req, res) => {
  let filter = [];
  Object.keys(req.query).forEach((key) => {
    filter.push({ [key]: req.query[key] });
  });

  climbs
    .findClimbs(filter, "", 0)
    .then((climbs) => {
      res.send(climbs);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Get failed" });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
