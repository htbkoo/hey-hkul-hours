import {Moment} from "moment";
import * as moment from "moment";

export function hour(str: string): Moment {
    return moment(str, "h:ma");
}