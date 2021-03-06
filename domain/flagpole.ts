import { Basic } from "./basic";
import { Global } from "../config";

export class Flagpole extends Basic {

    width: number = 1;
    height: number = 1;
    depth: number = 1;

    constructor(x: number, y: number) {
        super();
        this.pX = x;
        this.pZ = y;
    }

    toString() {
        return `{"sType": 0,"pX": ${this.pX},"pY": ${Global.y - 1.0},"pZ": ${this.pZ},"rW": 1.0,"rX": 0.0,"rY": 0.0,"rZ": 0.0,"sX": 1.0,"sY": 1.0,"sZ": 1.0,"obName": "FlagPole_Oasis","photonData": {"photonViewID": []}}`;
    }
}