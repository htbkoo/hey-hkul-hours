import {Moment} from "moment";
import * as moment from "moment";
import Hours from "../../service/hour/model/Hours";
import OpenHour from "../../service/hour/model/OpenHour";

export function hour(str: string): Moment {
    return moment(str, "h:ma");
}

export function nextDayHour(str: string): Moment {
    return hour(str).add(1, "d");
}

export function assertHours(hours: Hours) {
    return {
        toEqual(expectedHours: Array<any>) {
            return expect(hours.asArray()).toEqual(asOpenHours(expectedHours));
        }
    }
}


function asOpenHours(hours) {
    return hours.map(hour => new OpenHour(hour));
}