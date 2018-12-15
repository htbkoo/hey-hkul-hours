import * as moment from "moment";
import {Moment} from "moment";

const DEFAULT_TIME_FORMAT = "h:ma";

export default class MomentConverter {
    convert(str: string): Moment {
        return moment(str, DEFAULT_TIME_FORMAT);
    }
}