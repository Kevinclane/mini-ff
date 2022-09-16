import { Injectable } from "@angular/core";
import ICallbackAction from "../models/interfaces/IcallbackAction";
import ICombatant from "../models/interfaces/Icombatant";
import IEncounter from "../models/interfaces/Iencounter";
import { EncountersController } from "../psudoServer/controllers/encountersController";
import GameTimer from "./gameTimer";

const actions: ICallbackAction = {
    NINJA: [
        {
            name: "Attack",
            action: (targetId: string, encountersController: EncountersController, encounter: IEncounter, gameTimer: GameTimer) => {

                let attacker = encounter.party.find(c => c.id == encounter.whosTurnId);
                if (attacker) {
                    let attackersCallbackObject = gameTimer.getCallback(attacker.id);
                    if (attackersCallbackObject) {
                        attackersCallbackObject.state.action = "attack";
                        attackersCallbackObject.state.actionTargetIndex = encounter.enemies.findIndex(e => e.id == targetId);
                        attackersCallbackObject.state.actionSourceIndex = encounter.party.findIndex(p => p.id == attacker?.id);
                    }
                }

                let x = encountersController.executeAttack(targetId, encounter);
                console.log(x);
            },
        }

    ],
    // KNIGHT: {

    // }
}

@Injectable()
export class ActionFactory {

    gameTimer;

    constructor(gameTimer: GameTimer) {
        this.gameTimer = gameTimer;
    }

    getActions(whosTurnCombatant: ICombatant | undefined) {
        if (!whosTurnCombatant) {
            return []
        }
        let res = actions[whosTurnCombatant.classType];
        return res;
    }

}