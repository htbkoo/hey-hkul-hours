const CASE_INSENSITIVE_COMPARISON = {sensitivity: 'base'};
const EN_LOCALE = "en";

export function areEqualIgnoringCase(str1: string, str2: string): boolean {
    return str1.localeCompare(str2, EN_LOCALE, CASE_INSENSITIVE_COMPARISON) === 0;
}

export function isNonEmpty(str: string): boolean {
    return !!str && str.trim() !== "";
}