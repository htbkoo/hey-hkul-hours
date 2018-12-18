import Hour from "./Hour";

export default class Hours {
    private static readonly CLOSED = new Hours([]);

    private readonly _hours: Hour[];

    private constructor(hours: Hour[]) {
        this._hours = hours;
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
