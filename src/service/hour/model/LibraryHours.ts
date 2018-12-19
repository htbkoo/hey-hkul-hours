import {Moment} from "moment";
import Hours from "./Hours";

export type AllLibrariesHours = { [library: string]: Hours };
export type ReadOnlyAllLibrariesHours = Readonly<AllLibrariesHours>

export default interface LibraryHours {
    getDate(): Moment

    getHoursForAllLibraries(): AllLibrariesHours
}