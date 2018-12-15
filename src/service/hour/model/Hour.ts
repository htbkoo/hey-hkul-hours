import {Moment} from "moment";

export interface Hour {
    isClosed(): boolean

    getFrom(): Moment

    getTo(): Moment

    clone(): Hour
}