import { ICombatantStats } from "./IcombatantStats";

export default interface ICombatant {
    name: string,
    id: string,
    classType: string,
    level: number,
    stats: ICombatantStats,
    imgs: any
}