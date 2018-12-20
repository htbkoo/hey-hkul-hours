import {errr} from "preconditions";
import ValidatedStringsMap, {KEY_FOR_DATE} from "./validation/model/ValidatedStringsMap";
import {RawStringsMap} from "./validation/model/RawStringsMap";

const preconditions = errr();

export default class ParsedMapValidator {
    validate(stringsMap: RawStringsMap): ValidatedStringsMap {
        const date = stringsMap[KEY_FOR_DATE];
        preconditions.shouldBeDefined(date, 'Missing mapping of "%s" for date from the input', KEY_FOR_DATE).test();

        const {[KEY_FOR_DATE]: _, ...hours} = stringsMap;
        return {
            getDate(): string {
                return date;
            },
            getHoursMapping() {
                return hours
            }
        }
    }
}