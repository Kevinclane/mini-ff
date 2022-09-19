import IMovementData from "../interfaces/IMovementData";

export class ActionCSS {

    isActive: Boolean = false;
    cssClass: {
        transition: string,
        transform: string
    } = {
            transition: "",
            transform: ""
        }

    startWalk(movementData: IMovementData) {
        this.cssClass = {
            transition: "transform " + movementData.time + "s",
            transform: "translate(" + movementData.x + "vw, " + movementData.y + "vh)"
        }
    }

    returnWalk(time: number) {
        this.cssClass = {
            transition: time + "s",
            transform: "translate(0vw, 0vh)"
        }
    }

}