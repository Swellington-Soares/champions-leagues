import { Player, PlayerData } from "../models/player-model";

class PlayerRepository {
  
    private static _instance: PlayerRepository;

  private players: Map<number, Player>;

  constructor() {
    this.players = new Map();
  }

  addPlayer(playerData: PlayerData): number {
    const id = this.players.size + 1;
    
    const player = new Player(
      id,
      playerData.name,
      playerData.position,
      playerData.team,
      playerData.age,
      playerData.nationality,
      playerData.statistics);
    
    this.players.set(id, player);

    return id;
  }

  getPlayerById(id: number): Player | undefined {
    return this.players.get(id);
  }

  getPlayersByTeam(team: string): Player[] {
    return Array.from(this.players.values())
        .filter(player => player.team === team)
        .sort((a, b) => a.team.localeCompare(b.team) || a.id - b.id);    
  }

  getPlayersByPosition(position: string): Player[] {
    return Array.from(this.players.values())
        .filter(player => player.position === position)
        .sort((a, b) => a.position.localeCompare(b.position) || a.id - b.id);
  }

  getPlayersByNationality(nationality: string): Player[] {
    return Array.from(this.players.values())
        .filter(player => player.nationality === nationality)
        .sort((a, b) => a.nationality.localeCompare(b.nationality) || a.id - b.id);
  }

  updatePlayer(id: number, playerData: Player): boolean {
    if (this.players.has(id)) {
      this.players.set(id, playerData);
      return true;
    }
    return false;
  }

  deletePlayer(id: number): void {
    this.players.delete(id);
  }

  getPlayers(): Player[] {
    return Array.from(this.players.values()).sort((a, b) => a.id - b.id);
  }

  public static get instance(): PlayerRepository {
    if (!PlayerRepository._instance) {
      PlayerRepository._instance = new PlayerRepository();
    }
    return PlayerRepository._instance;
  }
}

export default PlayerRepository.instance;
