import * as moment from "moment";
import {Moment} from "moment";

import {isNonEmpty} from "../../utils/StringUtils";

const FOLLOWING_DAY_REGEX = /(.+)of the following day/;
const DEFAULT_TIME_FORMAT = "h:ma";

export default class MomentConverter {
    convert(str: string): Moment {
        const parseResult = this.parsingAsFollowingDay(str);

        if (parseResult.isFollowingDay()) {
            return parseResult.asMoment();
        } else {
            return MomentConverter.toMoment(str);
        }
    }

    private parsingAsFollowingDay(str) {
        const result = FOLLOWING_DAY_REGEX.exec(str);
        return {
            isFollowingDay() {
                return result !== null && isNonEmpty(this.getTime());
            },
            asMoment() {
                return MomentConverter.toMoment(this.getTime()).add(1, "d");
            },
            getTime(): string {
                return result[1];
            }
        };
    }

    private static toMoment(str: string): Moment {
        return moment(str.trim(), DEFAULT_TIME_FORMAT)
    }
}