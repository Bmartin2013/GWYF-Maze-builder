import { Basic } from "./basic";

export class HoleIndent extends Basic {

    width: number = 6;
    height: number = 1;
    depth: number = 6;

    constructor(x: number, y: number) {
        super();
        this.pX = x;
        this.pZ = y;
    }

    toString() {
        return `{"sType": 0,"pX": ${this.pX},"pY": 4.0,"pZ": ${this.pZ},"rW": 1.0,"rX": 0.0,"rY": 0.0,"rZ": 0.0,"sX": 1.0,"sY": 1.0,"sZ": 1.0,"obName": "6x6HoleIndent_Base_Space","photonData": {"photonViewID": []}}`;
    }
}