import { Injectable } from "@angular/core";
import IEncounter from "src/app/models/interfaces/Iencounter";
import { EncountersService } from "../services/encountersService";

@Injectable()
export class EncountersController {

    constructor(private _encountersService: EncountersService) { }

    generateEncounter(level: number) {
        let encounter: IEncounter = this._encountersService.createEncounter(level);
        return encounter;
    }

    executeAttack(targetId: string, encounter: IEncounter) {
        encounter = this._encountersService.executeAttack(targetId, encounter);
        encounter = this._encountersService.setNextCombatantsTurn(encounter);
        return encounter;
    }

}