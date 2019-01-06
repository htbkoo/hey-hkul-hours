// const CASE_INSENSITIVE_COMPARISON = {sensitivity: 'base'};
// const EN_LOCALE = "en";

export function areEqualIgnoringCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();

    // localeCompare does not work in Android environment due to the wrong JavaScriptCore implementation
    // reference: https://github.com/facebook/react-native/issues/12597
    // return str1.localeCompare(str2, EN_LOCALE, CASE_INSENSITIVE_COMPARISON) === 0;
}

export function isNonEmpty(str: string): boolean {
    return !!str && str.trim() !== "";
}