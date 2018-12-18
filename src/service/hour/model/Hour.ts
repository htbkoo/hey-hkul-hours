import {Moment} from "moment";

export default interface Hour {
    isClosed(): boolean

    getFrom(): Moment

    getTo(): Moment

    clone(): Hour

    equals(anotherHour: Hour): boolean
}