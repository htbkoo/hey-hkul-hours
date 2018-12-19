import {Moment} from "moment";
import {errr} from "preconditions";

import LibraryHours, {ReadOnlyAllLibrariesHours} from "./LibraryHours";

type InputMapType = {
    "Library": string,
    [libraryName: string]: string
}

const KEY_FOR_DATE = "Library";

const preconditions = errr();

export default class HkuLibraryHours implements LibraryHours {
    private readonly _date: Moment;
    private readonly _hours: ReadOnlyAllLibrariesHours;

    private constructor(date: Moment, hours: ReadOnlyAllLibrariesHours) {
        this._date = date;
        this._hours = hours;

    }

    public static fromParsedHtml(stringsMap: InputMapType): HkuLibraryHours {
        preconditions.shouldBeDefined(stringsMap[KEY_FOR_DATE]).test();

        return new HkuLibraryHours("" as any, "" as any);
    }

    getDate() {
        return this._date.clone();
    }

    getHoursForAllLibraries() {
        return {...this._hours}
    }
}