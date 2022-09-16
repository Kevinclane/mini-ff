import { v4 as uuidv4 } from 'uuid';
import ImageTypes from '../../implementors/imageTypes';
import ICombatant from '../../interfaces/Icombatant';
import { ICombatantStats } from '../../interfaces/IcombatantStats';
import { getStats } from './goblinBuilder';

export class Goblin implements ICombatant {
    name: string = "Goblin";
    id: string = uuidv4();
    classType: string = "GOBLIN";
    level: number;
    stats: ICombatantStats;
    imgs: ImageTypes;

    constructor(level: number) {
        this.level = level;
        this.stats = getStats(level);
        this.imgs = new ImageTypes();
    }

}