import * as moment from "moment";
import {Moment} from "moment";
import Hours from "../../service/hour/model/Hours";
import OpenHour from "../../service/hour/model/OpenHour";
import Hour from "../../service/hour/model/Hour";
import {AllZonesHours} from "../../service/hour/model/LibraryHours";

export function hour(str: string): Moment {
    return moment(str, "h:ma");
}

export function nextDayHour(str: string): Moment {
    return hour(str).add(1, "d");
}

export function assertAllHours(hours: AllZonesHours) {
    return {
        toEqual(expectedHours) {
            return Object.keys(hours).forEach(key => assertHours(hours[key]).toEqual(expectedHours[key]));
        }
    }
}

export function assertHours(hours: Hours) {
    return {
        toEqual(expectedHours: Array<any>) {
            return expect(hours.asArray()).toEqual(asHoursArray(expectedHours));
        }
    }
}

function asHoursArray(hours): Hour[] {
    if (isClosedHour()) {
        return Hours.closed().asArray();
    } else {
        return hours.map(asHour);
    }

    function isClosedHour(): boolean {
        return hours[0] && hours[0].isClosed && hours[0].isClosed();
    }
}

function asHour(obj) {
    if (isOpenHourCompatible()) {
        return new OpenHour(obj);
    } else {
        fail(`unable to parse the object: ${JSON.stringify(obj)}`);
    }

    function isOpenHourCompatible(): boolean {
        return moment.isMoment(obj.from) && moment.isMoment(obj.to);
    }
}