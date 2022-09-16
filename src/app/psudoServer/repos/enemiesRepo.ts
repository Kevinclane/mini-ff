import { Injectable } from "@angular/core"
import { Bandit } from "src/app/models/combatantsBuilders/enemies/bandit";
import { Bat } from "src/app/models/combatantsBuilders/enemies/bat";
import { Goblin } from "src/app/models/combatantsBuilders/enemies/goblin";
import ICombatant from "src/app/models/interfaces/Icombatant";



@Injectable()
export class EnemiesRepository {

    getRandomEnemies(count: number, level: number) {
        let loadedEnemies: ICombatant[] = [];
        let i = 0;
        while (i < count) {
            let rng = Math.floor(Math.random() * 3);

            switch (rng) {
                case 0:
                    loadedEnemies.push(new Bat(level));
                    break;
                case 1:
                    loadedEnemies.push(new Bandit(level));
                    break;
                case 2:
                    loadedEnemies.push(new Goblin(level));
                    break;
            }
            i++;
        }
        return loadedEnemies;
    }

}