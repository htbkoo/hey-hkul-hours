import {Moment} from "moment";
import Hours from "./Hours";

export type AllZonesHours = { [zone: string]: Hours };
export type ReadOnlyAllZonesHours = Readonly<AllZonesHours>

export default interface LibraryHours {
    getDate(): Moment

    getHoursForAllZones(): AllZonesHours
}