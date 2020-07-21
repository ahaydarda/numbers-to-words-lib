import {English} from "./words";
import {ILanguage} from "words/Ilanguage";

const converters = new Map<string, ILanguage>();
 [new English()]
     .forEach(language => converters.set(language.name,language))

export default converters;
