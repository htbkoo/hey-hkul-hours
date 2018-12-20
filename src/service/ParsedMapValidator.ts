import {errr} from "preconditions";
import ValidatedStringsMap, {KEY_FOR_DATE} from "./validation/model/ValidatedStringsMap";
import {RawStringsMap} from "./validation/model/RawStringsMap";

const preconditions = errr();

export default class ParsedMapValidator {
    validate(stringsMap: RawStringsMap) {
        preconditions.shouldBeDefined(stringsMap[KEY_FOR_DATE], 'Missing mapping of "%s" for date from the input', KEY_FOR_DATE).test();
    }
}