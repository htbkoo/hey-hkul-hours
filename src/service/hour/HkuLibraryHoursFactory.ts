import * as moment from "moment";
import {Moment} from "moment";

import LibraryHours from "./model/LibraryHours";
import HoursConverter from "../HoursConverter";
import ValidatedStringsMap from "../validation/model/ValidatedStringsMap";

const DEFAULT_DATE_FORMAT = "DD MMM YYYY dddd";

export default class HkuLibraryHoursFactory {
    private readonly _converter: HoursConverter;

    public constructor(converter: HoursConverter) {
        this._converter = converter;
    }

    public createLibraryHours(stringsMap: ValidatedStringsMap): LibraryHours {
        return this.hkuLibraryHours(stringsMap);
    }

    private hkuLibraryHours(map: ValidatedStringsMap): LibraryHours {
        const date = this.getDate(map);
        const hours = this.getHours(map);

        return {
            getDate() {
                return date;
            },
            getHoursForAllZones() {
                return hours;
            }
        }
    }

    private getDate(map: ValidatedStringsMap): Moment {
        return moment(map.getDate(), DEFAULT_DATE_FORMAT)
    }

    private getHours(map: ValidatedStringsMap) {
        const hours = map.getHoursMapping();
        return Object.keys(hours).reduce((obj, key) => {
            obj[key] = this._converter.convert(hours[key]);
            return obj;
        }, {});
    }
}