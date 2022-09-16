import { Injectable } from "@angular/core";
import { Encounter } from "src/app/models/implementors/encounter";
import Iencounter from "src/app/models/interfaces/Iencounter";
import { CharactersService } from "./charactersService";
import { EnemiesService } from "./enemiesService";

@Injectable()
export class EncountersService {

    constructor(private _charactersService: CharactersService, private _enemiesService: EnemiesService) {

    }

    createEncounter(level: number) {
        let party = this._charactersService.getAllCharacters();
        let enemies = this._enemiesService.generateRandomEnemies(3, level);

        let encounter = new Encounter(party, enemies);
        return encounter;
    }

    executeAttack(targetId: string, encounter: Iencounter) {
        let attacker = encounter.party.find(c => c.id == encounter.whosTurnId);
        if (attacker) {
            let damage = attacker?.stats.power * 2;
            let enemyIndex = encounter.enemies.findIndex(c => c.id == targetId);
            if (enemyIndex != -1) {
                encounter.logs.push(attacker.name + " hit " + encounter.enemies[enemyIndex].name + " for " + damage + " damage.")
                encounter.enemies[enemyIndex].stats.health.current -= damage;
            }
        }
        return encounter;
    }

    setNextCombatantsTurn(encounter: Iencounter) {
        encounter.turnOrderIds.shift();
        encounter.whosTurnId = encounter.turnOrderIds[0];
        return encounter;
    }
}