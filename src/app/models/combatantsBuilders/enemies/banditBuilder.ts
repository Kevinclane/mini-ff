import { ICombatantStats } from "../../interfaces/IcombatantStats";


class BaseStats implements ICombatantStats {
    health = {
        current: 10,
        max: 10
    }
    mana = {
        current: 5,
        max: 5
    }
    speed = 1
    power = 1
    setStats = () => {
        console.log("I should not be used in this instance.");
    }
}

const statLevelMultipliers = {
    health: 1.2,
    mana: 1.1,
    speed: 1.1,
    power: 1
}

export const getStats = (level: number) => {
    let stats = new BaseStats()
    let healthValue = Math.floor(statLevelMultipliers.health * level) * stats.health.max;
    stats.health.current = healthValue;
    stats.health.max = healthValue;

    let manaValue = Math.floor(statLevelMultipliers.mana * level) * stats.mana.max;
    stats.mana.current = manaValue;
    stats.mana.max = manaValue;

    let speedValue = Math.floor(statLevelMultipliers.speed * level) * stats.speed;
    stats.speed = speedValue;

    let powerValue = Math.floor(statLevelMultipliers.power * level) * stats.power;
    stats.power = powerValue;

    return stats;
}