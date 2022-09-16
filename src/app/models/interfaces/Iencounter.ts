import ICombatant from "./Icombatant";

export default interface IEncounter {
    party: ICombatant[];
    enemies: ICombatant[];

    turnOrderIds: string[];
    whosTurnId: string;

    logs: string[];
}