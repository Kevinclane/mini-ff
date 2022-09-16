import { v4 as uuidv4 } from 'uuid';


const rootPath = "../assets/combatants/";

const IMAGE_TYPES = {
    NINJA: [
        {
            type: "ATTACK",
            count: 8
        }, {
            type: "DEFEAT",
            count: 8 
        }, {
            type: "FALL",
            count: 8
        }, {
            type: "HURT",
            count: 8
        }, {
            type: "IDLE",
            count: 8
        }, {
            type: "JUMP",
            count: 8
        }, {
            type: "SHURIKEN",
            count: 8
        }, {
            type: "WALK",
            count: 8
        }
    ],
    KNIGHT: [
        {
            type: "ATTACK",
            count: 8
        }, {
            type: "DEFEAT",
            count: 8 
        }, {
            type: "FALL",
            count: 8
        }, {
            type: "HIT",
            count: 8
        }, {
            type: "HURT",
            count: 8
        }, {
            type: "IDLE",
            count: 12
        }, {
            type: "JUMP",
            count: 8
        }, {
            type: "SLIDING",
            count: 8
        }, {
            type: "WALK",
            count: 8
        }
    ],
    BAT: [
        {
            type: "ATTACK",
            count: 8
        }, {
            type: "DEFEAT",
            count: 8
        }, {
            type: "FLY",
            count: 8
        }, {
            type: "HURT",
            count: 8
        }, {
            type: "IDLE",
            count: 12
        }
    ],
    GOBLIN: [
        {
            type: "ATTACK",
            count: 8
        }, {
            type: "DEFEAT",
            count: 8
        }, {
            type: "FALL",
            count: 8
        }, {
            type: "HURT",
            count: 8
        }, {
            type: "IDLE",
            count: 12
        }, {
            type: "JUMP",
            count: 8
        }, {
            type: "WALK",
            count: 8
        }
    ], 
    BANDIT: [
        {
            type: "ATTACK",
            count: 8
        }, {
            type: "DEFEAT",
            count: 8
        }, {
            type: "FALL",
            count: 8
        }, {
            type: "HURT",
            count: 8
        }, {
            type: "IDLE",
            count: 12
        }, {
            type: "JUMP",
            count: 8
        }, {
            type: "WALK",
            count: 8
        }
    ]
}



export const getImages = (characterClass) => {

    let types = IMAGE_TYPES[characterClass];

    let imgUrls = {};

    let i = 0;

    while(i < types.length) {
        let typeDir = rootPath + characterClass + "/" + types[i].type;
        imgUrls[types[i].type] = [];

        
        let x = 0;
        while(x < types[i].count) {
            
            imgUrls[types[i].type].push(
                {
                    url: typeDir + "/" + types[i].type + "_" + (x + 1) + ".png",
                    id: uuidv4()
                }
            );

            x++;
        }

        i++;
    }

    return imgUrls;
}
