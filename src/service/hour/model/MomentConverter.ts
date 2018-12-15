import * as moment from "moment";
import {Moment} from "moment";

export default class MomentConverter {
    convert(str: string): Moment {
        return moment(str, "h:ma");
    }
}