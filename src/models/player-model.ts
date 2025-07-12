class Statistic {
  public overall: number = 0;
  public pace: number = 0;
  public shooting: number = 0;
  public passing: number = 0;
  public dribbling: number = 0;
  public defending: number = 0;
  public physicality: number = 0;

  get score(): number {
    return (
      (this.overall +
        this.pace +
        this.shooting +
        this.passing +
        this.dribbling +
        this.defending +
        this.physicality) /
      7
    );
  }
}

class Player {
  private _id: number;
  private _name: string;
  private _position: string;
  private _team: string;
  private _age: number;
  private _nationality: string;
  private _statistics: Statistic;

  constructor(
    id: number,
    name: string,
    position: string,
    team: string,
    age: number,
    nationality: string,
    statistics: Statistic
  ) {
    this._id = id;
    this._name = name;
    this._position = position;
    this._team = team;
    this._age = age;
    this._nationality = nationality;
    this._statistics = statistics;
  }

  get score(): number {
    return this._statistics.score;
  }
  
  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get position(): string {
    return this._position;
  }
  get team(): string {
    return this._team;
  }
  get age(): number {
    return this._age;
  }
  get nationality(): string {
    return this._nationality;
  }
  get statistics(): Statistic {
    return this._statistics;
  }

  set name(value: string) {
    this._name = value;
  }

  set position(value: string) {
    this._position = value;
  }

  set team(value: string) {
    this._team = value;
  }

  set age(value: number) {
    this._age = value;
  }

  set nationality(value: string) {
    this._nationality = value;
  }

  set statistics(value: Statistic) {
    this._statistics = value;
  }

}

type PlayerData = Omit<Player, "id" | "score">;

export { Player, PlayerData };
