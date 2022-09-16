import { v4 as uuidv4 } from 'uuid';
import { CombatantStats } from '../../implementors/combatantStats';
import ImageTypes from '../../implementors/imageTypes';
import ICombatant from '../../interfaces/Icombatant';
import { ICombatantStats } from '../../interfaces/IcombatantStats';

import { getStats } from './banditBuilder';

export class Bandit implements ICombatant {
    name: string = "Bandit";
    id: string = uuidv4();
    classType: string = "BANDIT";
    level: number;
    stats: ICombatantStats = new CombatantStats();
    imgs: ImageTypes;

    constructor(level: number) {
        this.level = level;
        this.stats.setStats(getStats(level));
        this.imgs = new ImageTypes();
    }

}