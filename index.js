const express = require("express");
const app = express();

app.get("/check", (req, res) => {
  const id = req.query.id;
  const password = req.query.password;
  const idRegex = /^[0-9]{8,13}$/;

  if (idRegex.test(id) && password === "HIX99") {
    res.send("Success");
  } else {
    res.send("Failed");
  }
});

app.listen(3000);
