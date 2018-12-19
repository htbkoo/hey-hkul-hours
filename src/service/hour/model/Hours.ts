import Hour from "./Hour";
import {errr} from "preconditions";

const preconditions = errr();

export default class Hours {
    private static readonly CLOSED = new Hours([]);

    private readonly _hours: Hour[];

    private constructor(hours: Hour[]) {
        this._hours = hours;
    }

    public static openHours(openHours: Hour[]): Hours {
        preconditions.shouldNotBeEmpty(openHours, "Cannot create openHours with empty array - maybe you want to create Hours.closedHours() instead?").test();
        return new Hours(openHours.map(hour => hour.clone()));
    }

    public static closed(): Hours {
        return Hours.CLOSED;
    }

    isClosed(): boolean {
        return this._hours.length === 0;
    }

    asArray(): Hour[] {
        return this._hours.map(hour => hour.clone());
    }
}
