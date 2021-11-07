
interface ISensorDataUtils {
    /**
     * Parses a document fetched from the mongodb database and transforms into an array. 
     * 
     * @param document the document to parse
     * @param keys (OPTIONAL) The fields to include in the parsing process. The keys should be included in the document; otherwise, it will throw an error. 
     */
    parseDocumentToArr(document: any): Array<string | number>;
}

export class SensorDataUtils implements ISensorDataUtils {

    parseDocumentToArr(document: any): Array<string | number> {
        return Object.keys(document).map((key: string | number) => document[key]);
    } 
} 