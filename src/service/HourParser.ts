export type HourInString = {
    from: string,
    to: string,
}

export default interface HourRegexParser {
    parse(str: string): HourInString[]
}