import ICombatant from "../interfaces/Icombatant";
import IEncounter from "../interfaces/Iencounter";

export class Encounter implements IEncounter {
    party: ICombatant[];
    enemies: ICombatant[] = [];

    turnOrderIds: string[] = [];
    whosTurnId: string;

    logs: string[] = [];

    _generateTurns() {
        let allCombatants = this.party.concat(this.enemies);
        let speedCounters: [{ combatant: ICombatant | null, count: number | null }] = [{ combatant: null, count: null }];

        allCombatants.forEach(c => {
            speedCounters.push({
                combatant: c,
                count: 0
            })
        });
        while (this.turnOrderIds.length < 100) {

            speedCounters.forEach(sc => {
                if (sc.combatant != null && sc.count != null) {
                    sc.count += sc.combatant.stats.speed;
                    if (sc.count >= 10) {
                        this.turnOrderIds.push(sc.combatant.id);
                        sc.count -= 10;
                    }
                }
            });
        }


    }

    constructor(party: ICombatant[], enemies: ICombatant[]) {
        this.party = party;
        this.enemies = enemies

        this._generateTurns();
        this.whosTurnId = this.turnOrderIds[0];
    }

}