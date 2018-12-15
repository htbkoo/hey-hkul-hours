import Hours from "./hour/model/Hours";

export default class HourConverter {
    constructor() {
    }

    convert(str: string): Hours {
        return Hours.closed();
    }
}