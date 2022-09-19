import IStatPool from "./IstatPool"

export interface ICombatantStats {
    health: IStatPool,
    mana: IStatPool,
    speed: number,
    power: number,
    setStats: Function
}