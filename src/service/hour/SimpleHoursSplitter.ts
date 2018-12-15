import HoursSplitter from "./HoursSplitter";

export default class SimpleHoursSplitter implements HoursSplitter {
    split(str: string): string[] {
        return str.split(",").map(hour => hour.trim());
    }
}