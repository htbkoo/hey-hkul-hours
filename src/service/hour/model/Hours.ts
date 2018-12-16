import {Hour} from "./Hour";

export default class Hours {
    private static readonly CLOSED = new Hours([]);

    private readonly _hours: Hour[];

    private constructor(hours: Hour[]) {
        this._hours = hours;
    }

    public static hoursBuilder() {
        return new Hours.HoursBuilder();
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

    private static HoursBuilder = class {
        private readonly _hours: Hour[] = [];

        public static basedOn(hours: Hours) {
            return hours.asArray()
                .reduce(
                    (builder, hour) => builder.withHour(hour),
                    Hours.hoursBuilder()
                );
        }

        // IntelliJ failed to recognize the usage
        // noinspection JSUnusedGlobalSymbols
        public withHour(hour: Hour) {
            this._hours.push(hour);
            return this;
        }

        public build(): Hours {
            return new Hours(this._hours);
        }
    }
}
