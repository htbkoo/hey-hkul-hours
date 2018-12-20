import * as moment from "moment";
import {Moment} from "moment";
import {errr} from "preconditions";

import LibraryHours, {ReadOnlyAllZonesHours} from "./model/LibraryHours";
import HoursConverter from "../HoursConverter";

const KEY_FOR_DATE = "Library";
const DEFAULT_DATE_FORMAT = "DD MMM YYYY dddd";

type InputMapType = {
    [KEY_FOR_DATE]: string,
    [libraryName: string]: string
}

const preconditions = errr();

export default class HkuLibraryHoursFactory {
    private readonly _converter: HoursConverter;

    public constructor(converter: HoursConverter) {
        this._converter = converter;
    }

    public createLibraryHours(stringsMap: InputMapType): LibraryHours {
        preconditions.shouldBeDefined(stringsMap[KEY_FOR_DATE], 'Missing mapping of "%s" for date from the input', KEY_FOR_DATE).test();

        return this.hkuLibraryHours(stringsMap);
    }

    private hkuLibraryHours(map: InputMapType): LibraryHours {
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

    private getDate(map: InputMapType): Moment {
        return moment(map[KEY_FOR_DATE], DEFAULT_DATE_FORMAT)
    }

    private getHours(map: InputMapType): ReadOnlyAllZonesHours {
        const {[KEY_FOR_DATE]: _, ...hours} = map;

        return Object.keys(hours).reduce((obj, key) => {
            obj[key] = this._converter.convert(hours[key]);
            return obj;
        }, {});
    }
}