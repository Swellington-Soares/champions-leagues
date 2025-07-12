import { Request, Response } from "express";
import { PlayerService } from "../services/player-service";
import { HttpHelper } from "../utils/http-helper";
import { ApiError } from "../exceptions/api-error";

const PlayerController = {
  getPlayers: async (req: Request, res: Response) => {
    try {
      const players = await PlayerService.getPlayers();
      const response = HttpHelper.ok(players);
      res.status(response.statusCode).json(response.body);
    } catch (error) {
      const response = HttpHelper.serverError("Failed to fetch players.");
      res.status(response.statusCode).json(response.body);
    }
  },

  getPlayerById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    try {
      const player = await PlayerService.getPlayerById(id);
      const response = HttpHelper.ok(player);
      res.status(response.statusCode).json(response.body);
    } catch (error: ApiError | any) {
      if (error instanceof ApiError) {
        const response = HttpHelper.customError(error.status, error.message);
        res.status(response.statusCode).json(response.body);
      } else {
        const response = HttpHelper.serverError("Failed to fetch player.");
        res.status(response.statusCode).json(response.body);
      }
    }
  },

  getPlayersByTeam: async (req: Request, res: Response) => {
    try {
      const team = req.params.team;
      const players = await PlayerService.getPlayersByTeam(team);
      const response = HttpHelper.ok(players);
      res.status(response.statusCode).json(response.body);
    } catch (error) {
      const response = HttpHelper.serverError(
        "Failed to fetch players by team."
      );
      res.status(response.statusCode).json(response.body);
    }
  },

  getPlayersByPosition: async (req: Request, res: Response) => {
    try {
      const position = req.params.position;
      const players = await PlayerService.getPlayersByPosition(position);
      const response = HttpHelper.ok(players);
      res.status(response.statusCode).json(response.body);
    } catch (error) {
      const response = HttpHelper.serverError(
        "Failed to fetch players by position."
      );
      res.status(response.statusCode).json(response.body);
    }
  },

  getPlayersByNationality: async (req: Request, res: Response) => {
    try {
      const nationality = req.params.nationality;
      const players = await PlayerService.getPlayersByPosition(nationality);
      const response = HttpHelper.ok(players);
      res.status(response.statusCode).json(response.body);
    } catch (error) {
      const response = HttpHelper.serverError(
        "Failed to fetch players by position."
      );
      res.status(response.statusCode).json(response.body);
    }
  },

  addPlayer: async (req: Request, res: Response) => {
    try {
      const playerData = req.body;
      const newPlayer = await PlayerService.createPlayer(playerData);
      const response = HttpHelper.created(newPlayer);
      res.status(response.statusCode).json(response.body);
    } catch (error) {
      const response = HttpHelper.serverError("Failed to create player.");
      res.status(response.statusCode).json(response.body);
    }
  },

  updatePlayer: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    try {
      const playerData = req.body;
      await PlayerService.updatePlayer(id, playerData);
      const response = HttpHelper.noContent();
      res.status(response.statusCode).send();
    } catch (error: ApiError | any) {
      if (error instanceof ApiError) {
        const response = HttpHelper.customError(error.status, error.message);
        res.status(response.statusCode).json(response.body);
      } else {
        const response = HttpHelper.serverError("Failed to update player.");
        res.status(response.statusCode).json(response.body);
      }
    }
  },

  deletePlayer: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id, 10);
      await PlayerService.deletePlayer(id);
      const response = HttpHelper.noContent();
      res.status(response.statusCode).send();
    } catch (error: ApiError | any) {
      if (error instanceof ApiError) {
        const response = HttpHelper.customError(error.status, error.message);
        res.status(response.statusCode).json(response.body);
      } else {
        const response = HttpHelper.serverError("Failed to delete player.");
        res.status(response.statusCode).json(response.body);
      }
    }
  },
};

export { PlayerController };
