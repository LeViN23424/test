import type { rapportParameterType , rollParameterType,OpeningType} from "../types";

export interface Result {
    width:string,
    height:string,
    length:string,
    rapport:rapportParameterType,
    roll:rollParameterType,
    doors:OpeningType[],
    windows:OpeningType[]
}