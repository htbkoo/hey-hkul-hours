export type HourInString = {
    from: string,
    to: string,
}

const HourStringFormat = /(.+) - (.+)/;

export default class HourRegexParser {
    constructor() {
    }

    parse(str: string): HourInString {
        const result = HourStringFormat.exec(str);
        return {
            from: result[1],
            to: result[2],
        }
    }
}