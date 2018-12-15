import HourInString from "./model/HourInString";

export function unparsableStringToHourError(str: string){
    return new TypeError(`Unable to parse input: "${str}"`)
}

export default interface HourParser {
    parse(str: string): HourInString
}