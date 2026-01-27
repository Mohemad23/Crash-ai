const express = require("express");
const app = express();

app.use(express.json());

app.post("/check", (req, res) => {
  const { id, password } = req.body;
  const idRegex = /^[0-9]{8,13}$/;

  if (idRegex.test(id) && password === "HIX99") {
    res.send("Success");
  } else {
    res.send("Failed");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
