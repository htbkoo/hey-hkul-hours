import Hours from "./hour/model/Hours";

export default class HoursConverter {
    constructor() {
    }

    convert(str: string): Hours {
        return Hours.closed();
    }
}