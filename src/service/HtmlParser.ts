import {RawStringsMap} from "./validation/model/RawStringsMap";

export default interface HtmlParser {
    parseHtml(html: string): Promise<RawStringsMap>;
}