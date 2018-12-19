import {Moment} from "moment";
import * as moment from "moment";

export function hour(str: string): Moment {
    return moment(str, "h:ma");
}

export function nextDayHour(str: string): Moment {
    return hour(str).add(1, "d");
}