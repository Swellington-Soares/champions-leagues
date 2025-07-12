import { PlayerNotFoundError } from "../exceptions/player-notfound-error";
import { PlayerNotUpdatedError } from "../exceptions/player-notupdated-error";
import { Player, PlayerData } from "../models/player-model";
import PlayerRepository from "../repositories/player-repository";

class PlayerService {
  static async getPlayers() {
    return PlayerRepository.getPlayers();
  }

  static async getPlayerById(id: number) {
    const player = PlayerRepository.getPlayerById(id);
    if (!player) {
      throw new PlayerNotFoundError(`Player with id ${id} not found.`);
    }
    return PlayerRepository.getPlayerById(id);
  }

  static async getPlayersByTeam(team: string) {
    return PlayerRepository.getPlayersByTeam(team);
  }

  static async getPlayersByPosition(position: string) {
    return PlayerRepository.getPlayersByPosition(position);
  }

  static async getPlayersByNationality(nationality: string) {
    return PlayerRepository.getPlayersByNationality(nationality);
  }

  static async createPlayer(playerData: PlayerData) {
    const id = PlayerRepository.addPlayer(playerData);
    return PlayerRepository.getPlayerById(id);
  }

  static async updatePlayer(id: number, playerData: PlayerData) {
    const player = PlayerRepository.getPlayerById(id);

    if (!player) {
      throw new PlayerNotFoundError(`Player with id ${id} not found.`);
    }
    const updatedPlayer: Player = Object.create(player);

    updatedPlayer.name = playerData.name || player.name;
    updatedPlayer.position = playerData.position || player.position;
    updatedPlayer.team = playerData.team || player.team;
    updatedPlayer.age = playerData.age || player.age;
    updatedPlayer.nationality = playerData.nationality || player.nationality;
    updatedPlayer.statistics = playerData.statistics || player.statistics;

    const success = PlayerRepository.updatePlayer(id, updatedPlayer);

    if (!success) {
      throw new PlayerNotUpdatedError(`Player with id ${id} not updated.`);
    }
  }

  static async deletePlayer(id: number) {
    const player = PlayerRepository.getPlayerById(id);
    if (!player) {
      throw new PlayerNotFoundError(`Player with id ${id} not found.`);
    }
    PlayerRepository.deletePlayer(id);
  }
  
}

export { PlayerService };
