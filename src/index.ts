import express, {  Request, Response } from "express";
import { PlayerController } from "./controllers/player-controller";
import router, { ROUTE_PREFIX } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(ROUTE_PREFIX, router);


const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
