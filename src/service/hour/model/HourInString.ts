export class HourInString {
    private readonly _from: string;
    private readonly _to: string;

    constructor({from, to}: { from: string, to: string }) {
        this._from = from;
        this._to = to;
    }
}