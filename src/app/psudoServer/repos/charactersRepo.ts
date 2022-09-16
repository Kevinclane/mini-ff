import { Injectable } from "@angular/core";
import { Combatant } from "src/app/models/implementors/combatant";
import ImageTypes from "src/app/models/implementors/imageTypes";
import ICombatant from "src/app/models/interfaces/Icombatant";


const characters = [
    {
        name: "Drake",
        id: "Drake1",
        classType: "NINJA",
        level: 1,
        stats: {
            health: {
                current: 20,
                max: 20
            },
            mana: {
                current: 10,
                max: 10
            },
            speed: 2,
            power: 2
        },
        imgs: new ImageTypes()
    },
    {
        name: "Kevin",
        id: "Kevin1",
        classType: "KNIGHT",
        level: 1,
        stats: {
            health: {
                current: 30,
                max: 30
            },
            mana: {
                current: 5,
                max: 5
            },
            speed: 1,
            power: 2
        },
        imgs: new ImageTypes()
    }
]

const CHARACTERS_KEY = 'characters';

@Injectable()
export class CharactersRepository {

    private _save = (key: string, value: any) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    private _load = (key: string) => {
        let data = window.localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
    }

    resetDB() {
        window.localStorage.clear();
        this._save(CHARACTERS_KEY, characters);
    }

    getCharacterById(id: string) {
        let allCharacters: ICombatant[] = this._load(CHARACTERS_KEY);
        if (allCharacters != null) {
            let foundCharacter = allCharacters.find(c => c.id == id);
            if (foundCharacter) {
                return foundCharacter;
            }
        }
        return new Combatant();
    }

    getAllCharacters() {
        let allCharacters: ICombatant[] = this._load(CHARACTERS_KEY);
        return allCharacters;
    }

}