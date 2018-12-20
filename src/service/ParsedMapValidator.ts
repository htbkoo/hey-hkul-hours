import {errr} from "preconditions";
import ValidatedStringsMap, {KEY_FOR_DATE} from "./validation/model/ValidatedStringsMap";
import {RawStringsMap} from "./validation/model/RawStringsMap";

const preconditions = errr();

export default class ParsedMapValidator {
    validate(stringsMap: RawStringsMap): ValidatedStringsMap {
        const date = this.getDate(stringsMap);
        preconditions.shouldBeDefined(date, 'Missing mapping of "%s" for date from the input', KEY_FOR_DATE).test();

        const hours = this.getHours(stringsMap);
        return {
            getDate(): string {
                return date;
            },
            getHoursMapping() {
                return hours
            }
        }
    }

    private getDate(stringsMap: RawStringsMap) {
        return stringsMap[KEY_FOR_DATE];
    }

    private getHours(map: RawStringsMap) {
        const {[KEY_FOR_DATE]: _, ...hours} = map;
        return hours
    }
}