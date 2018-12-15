import HourParser, {HourInString} from "./HourParser";

export default class HourSimpleParser implements HourParser {
    parse(str: string): HourInString[] {
        const parts = toParts(str);

        if (parts.isValid) {
            return [parts.toHour()];
        } else {
            throw new TypeError(`Unable to parse input: "${str}"`);
        }

        function toParts(str: string) {
            const parts = str.split("-");
            const rawFrom = parts[0], rawTo = parts[1];

            return {
                get isValid(): boolean {
                    return parts.length === 2 && isPartValid(rawFrom) && isPartValid(rawTo);
                },
                toHour() {
                    return {
                        from: rawFrom.trim(),
                        to: rawTo.trim(),
                    }
                }
            };

            function isPartValid(rawStr: string) {
                return rawStr && rawStr.trim() !== "";
            }
        }
    }
}