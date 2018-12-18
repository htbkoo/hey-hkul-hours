import {Moment} from "moment";

import Hour from "./Hour";

export default class OpenHour implements Hour {
    private readonly _from: Moment;
    private readonly _to: Moment;

    constructor({from, to}: { from: Moment, to: Moment }) {
        this._from = from.clone();
        this._to = to.clone();
    }

    isClosed(): boolean {
        return false;
    }

    getFrom(): Moment {
        return this._from.clone();
    }

    getTo(): Moment {
        return this._to.clone();
    }

    clone(): Hour {
        return new OpenHour({from: this.getFrom(), to: this.getTo()});
    }

    equals(anotherHour: Hour): boolean {
        return this._from.isSame(anotherHour.getFrom()) && this._to.isSame(anotherHour.getTo());
    }
}