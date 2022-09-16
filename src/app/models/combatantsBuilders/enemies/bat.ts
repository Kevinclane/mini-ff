import { v4 as uuidv4 } from 'uuid';
import ImageTypes from '../../implementors/imageTypes';
import ICombatant from '../../interfaces/Icombatant';
import { ICombatantStats } from '../../interfaces/IcombatantStats';
import { getStats } from './batBuilder';

export class Bat implements ICombatant {
    name: string = "Bat";
    id: string = uuidv4();
    classType: string = "BAT";
    level: number;
    stats: ICombatantStats;
    imgs: ImageTypes;

    constructor(level: number) {
        this.level = level;
        this.stats = getStats(level);
        this.imgs = new ImageTypes();
    }

}