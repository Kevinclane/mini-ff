
import { ICombatantStats } from "../interfaces/IcombatantStats";
import IStatPool from "../interfaces/IstatPool";
import { StatPool } from "./StatPool";

export class CombatantStats implements ICombatantStats {

    health: IStatPool = new StatPool();
    mana: IStatPool = new StatPool();
    speed: number = 0;
    power: number = 0;

    constructor() { }

    setStats(combatantStats: ICombatantStats) {
        this.health = combatantStats.health;
        this.mana = combatantStats.mana;
        this.speed = combatantStats.speed;
        this.power = combatantStats.power;
    }

}