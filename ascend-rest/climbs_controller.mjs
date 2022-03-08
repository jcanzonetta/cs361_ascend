import * as climbs from "./climbs_model.mjs";
import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const app = express();

const PORT = 3000;

app.use(express.json());

/**
 * Retrieves the climb(s) that match the query parameters.
 */
app.get("/climbs", (req, res) => {
  let filter = req.query;
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

app.get("/climb/:_id", (req, res) => {
  climbs
    .findClimb(req.params._id)
    .then((climbs) => {
      res.send(climbs);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Get failed" });
    });
});

app.get("/weather", (req, res) => {
  const fs = require("fs");
  fs.readFile("./WeatherScraper/WeatherData.txt", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data.toString().split("\n"));
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
