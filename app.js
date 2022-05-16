const express = require("express");
const cors = require("cors");
const app = express();
var wss;

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

app.setWss = (wsserver) => {
  wss = wsserver;
};

app.get("/trigger", (req, res, next) => {
  console.log(
    "Um app externo fez uma chamada para o WS Server com os seguintes parâmetros:"
  );
  console.log(req.query);

  wss.broadcast({ data: req.query });
  res.sendStatus(200);
});

module.exports = app;
