import Hours from "./hour/model/Hours";
import {areEqualIgnoringCase} from "../utils/StringUtils";

const CLOSED = "closed";

export default class HoursConverter {
    constructor() {
    }

    convert(str: string): Hours {
        if (isClosed()) {
            return Hours.closed();
        } else {

        }

        function isClosed() {
            return areEqualIgnoringCase(CLOSED, str);
        }
    }
}