
export interface ICombatantStats {
    health: {
        current: number,
        max: number
    },
    mana: {
        current: number,
        max: number
    },
    speed: number,
    power: number,
    setStats: Function
}