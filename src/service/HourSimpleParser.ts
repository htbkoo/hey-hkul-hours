import HourParser, {HourInString} from "./HourParser";

export default class HourSimpleParser implements HourParser {
    parse(str: string): HourInString[] {
        const parts = toParts(str);

        if (parts.isValid) {
            return [{
                from: parts.rawFrom.trim(),
                to: parts.rawTo.trim(),
            }];
        } else {
            throw new TypeError(`Unable to parse input: "${str}"`);
        }

        function toParts(str: string) {
            const parts = str.split("-");

            return {
                get isValid(): boolean {
                    return parts.length === 2 && isPartValid(this.rawFrom) && isPartValid(this.rawTo);
                },
                get rawFrom(): string {
                    return parts[0];
                },
                get rawTo(): string {
                    return parts[1];
                }
            };

            function isPartValid(rawStr: string) {
                return rawStr && rawStr.trim() !== "";
            }
        }
    }
}