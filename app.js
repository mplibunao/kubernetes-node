import express from "express";

const app = express();

const router = express.Router();

const path = __dirname + "/views/";

const port = 8080;

// Log the routes
router.use((req, _res, next) => {
  console.log("/" + req.method); // eslint-disable-line no-console
  next();
});

router.get("/", (_req, res) => {
  res.sendFile(path + "index.html");
});

router.get("/sharks", (_, res) => {
  res.sendFile(`${path}sharks.html`);
});

app.use(express.static(path));

app.use("/", router);

app.listen(port, () => {
  console.log("App listening on port " + port);
});
