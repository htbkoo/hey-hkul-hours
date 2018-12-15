import * as moment from "moment";
import {Moment} from "moment";

import {isNonEmpty} from "../../../utils/StringUtils";

const FOLLOWING_DAY_REGEX = /(.+)of the following day/;
const DEFAULT_TIME_FORMAT = "h:ma";

export default class MomentConverter {
    convert(str: string): Moment {
        const parseResult = parsingAsFollowingDay();

        if (parseResult.isFollowingDay()) {
            return parseResult.asMoment();
        } else {
            return moment(str, DEFAULT_TIME_FORMAT);
        }

        function parsingAsFollowingDay() {
            const result = FOLLOWING_DAY_REGEX.exec(str);
            return {
                isFollowingDay() {
                    return result !== null && isNonEmpty(this.getTime());
                },
                asMoment() {
                    return moment(this.getTime(), DEFAULT_TIME_FORMAT).add(1, "d");
                },
                getTime(): string {
                    return result[1];
                }
            };
        }
    }
}