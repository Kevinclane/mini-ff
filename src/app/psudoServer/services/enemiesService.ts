import { Injectable } from "@angular/core";
import { EnemiesRepository } from "../repos/enemiesRepo";

@Injectable()
export class EnemiesService {

    constructor(private _enemiesRepo: EnemiesRepository) { }

    generateRandomEnemies(count: number, level: number) {
        return this._enemiesRepo.getRandomEnemies(count, level);
    }

}