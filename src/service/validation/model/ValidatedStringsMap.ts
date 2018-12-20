type HoursMapping = {
    [libraryName: string]: string
};

export const KEY_FOR_DATE = "Library";

export default interface ValidatedStringsMap {
    getDate(): string

    getHoursMapping(): HoursMapping
}