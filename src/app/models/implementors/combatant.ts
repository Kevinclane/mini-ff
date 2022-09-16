import { ICombatantStats } from "../interfaces/IcombatantStats";
import { CombatantStats } from "./combatantStats";

export class Combatant {
    name: string = "";
    id: string = "";
    classType: string = "";
    level: number = 0;
    stats: ICombatantStats;
    imgs: string[] = [];

    constructor() {
        this.stats = new CombatantStats();
    }

}