import Hour from "./Hour";
import MomentConverter from "../MomentConverter";
import OpenHour from "./OpenHour";

export default class HourInString {
    private readonly _from: string;
    private readonly _to: string;

    constructor({from, to}: { from: string, to: string }) {
        this._from = from;
        this._to = to;
    }

    asHour(converter: MomentConverter): Hour {
        return new OpenHour({
            from: converter.convert(this._from),
            to: converter.convert(this._to),
        });
    }
}