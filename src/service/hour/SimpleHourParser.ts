import HourParser, {HourInString, unparsableStringToHourError} from "./HourParser";
import {isNonEmpty} from "../../utils/StringUtils";

export default class SimpleHourParser implements HourParser {
    parse(str: string): HourInString {
        const parts = toParts(str);

        if (parts.isValid) {
            return parts.toHour();
        } else {
            throw unparsableStringToHourError(str);
        }

        function toParts(str: string) {
            const parts = str.split("-");
            const rawFrom = parts[0], rawTo = parts[1];

            return {
                get isValid(): boolean {
                    return parts.length === 2 && isNonEmpty(rawFrom) && isNonEmpty(rawTo);
                },
                toHour() {
                    return {
                        from: rawFrom.trim(),
                        to: rawTo.trim(),
                    }
                }
            };
        }
    }
}