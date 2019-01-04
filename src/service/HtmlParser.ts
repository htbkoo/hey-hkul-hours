import * as cheerio from "cheerio";

import {RawStringsMap} from "./validation/model/RawStringsMap";

export default class HtmlParser {
    parseHtml(html: string): RawStringsMap {
        const $ = cheerio.load(html);

        return Array.from($("tr").map((i, tr) => $(tr).find("td").map((i, td) => $(td).text())))
            .reduce((obj, node) => {
                obj[node[0]] = node[1];
                return obj;
            }, {});
    }
}