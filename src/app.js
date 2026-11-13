const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("วัดนาคู: เซิร์ฟเวอร์ทำงานแล้ว");
});

module.exports = app;
