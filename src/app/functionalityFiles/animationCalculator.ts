import { MovementData } from "../models/implementors/movementData";
import IMovementData from "../models/interfaces/IMovementData";

export const calculateAnimationTime = (startIndex: number, endIndex: number) => {

    let movementData = new MovementData();

    switch (startIndex) {
        case 0:
            switch (endIndex) {
                case 0:
                    movementData.time = 1;
                    movementData.x = 20;
                    movementData.y = 0;
                    break;
                case 1:
                    movementData.time = 2;
                    movementData.x = 45;
                    movementData.y = -18;
                    break;
                case 2:
                    movementData.time = 2;
                    movementData.x = 45;
                    movementData.y = 18;
                    break;
            }
            break;

        case 1:
            switch (endIndex) {
                case 0:
                    movementData.time = 2;
                    movementData.x = 50;
                    movementData.y = -18;
                    break;
                case 1:
                    movementData.time = 3;
                    movementData.x = 70;
                    movementData.y = 0;
                    break;
                case 2:
                    movementData.time = 4;
                    movementData.x = 70;
                    movementData.y = -36;
                    break;
            }
            break;

        case 2:
            switch (endIndex) {
                case 0:
                    movementData.time = 2;
                    movementData.x = 50;
                    movementData.y = 18;
                    break;
                case 1:
                    movementData.time = 4;
                    movementData.x = 70;
                    movementData.y = 36;
                    break;
                case 2:
                    movementData.time = 3;
                    movementData.x = 70;
                    movementData.y = 0;
                    break;
            }
            break;

        default:
            return movementData;
    }

    return movementData;
}

