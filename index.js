const app = require("./app");
const appWs = require("./app-ws");

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("Express server is running!");
});

const wss = appWs(server);
app.setWss(wss);
