import express from "express";

const app = express();
const port = 3001;

app.get("/", (_, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});