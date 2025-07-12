import { Router } from "express";
import { PlayerController } from "./controllers/player-controller";

const router = Router();
const ROUTE_PREFIX = "/api/v1";

router.get("/players", PlayerController.getPlayers);
router.get("/players/:id", PlayerController.getPlayerById);
router.get("/players/team/:team", PlayerController.getPlayersByTeam);   
router.get("/players/position/:position", PlayerController.getPlayersByPosition);
router.get("/players/nationality/:nationality", PlayerController.getPlayersByNationality);
router.post("/players", PlayerController.addPlayer);
router.put("/players/:id", PlayerController.updatePlayer);
router.delete("/players/:id", PlayerController.deletePlayer);

export default router;
export { ROUTE_PREFIX };