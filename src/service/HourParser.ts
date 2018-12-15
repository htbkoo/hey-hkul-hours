export type HourInString = {
    from: string,
    to: string,
}

export function unparsableStringToHourError(str: string){
    return new TypeError(`Unable to parse input: "${str}"`)
}

export default interface HourRegexParser {
    parse(str: string): HourInString
}