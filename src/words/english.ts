// import {IConvertFunc} from "../IConvertFunc";
import {ILanguage} from "words/Ilanguage";
import {LANGUAGES} from "../consts";

// const zeroToTen = [ "zero", "one", "two",
//     "three", "four","five",
//     "six", "seven", "eight", "nine"];
//
//
// const tenToNineteen =[ "ten", "eleven", "twelve",
//     "thirteen", "fourteen",
//     "fifteen", "sixteen",
//     "seventeen", "eighteen", "nineteen"];
//
// const twentyToNinety = ["twenty", "thirty", "forty", "fifty",
//     "sixty", "seventy", "eighty", "ninety","hundred"]
//
// const tensPower = ["thousand", "million","billion","trillion"];
//
//
// const numbersMap = new Map<string,string>();
// zeroToTen.forEach((value, index)=>numbersMap.set(index.toString(), value));
//
// tenToNineteen.forEach((value, index)=>numbersMap.set( (index+10).toString(), value));
//
// twentyToNinety.forEach((value, index)=>numbersMap.set( (index * 10 +20).toString(), value));
//
// tensPower.forEach((value, index)=>numbersMap.set( (Math.pow(10,index * 3 + 3)).toString(), value));
//
//
// const joiner = (firstPart:number, secondPart: number) : string=>{
//     const first = firstPart.toString().length;
//     const second = secondPart.toString().length;
//     if(first===2 && second ==1) {
//         return "-";
//     }
//     //hundres, tousends and millions not connected with and
//     if( first>3 && second>=3){
//         return ", "
//     }
//     else {
//         return " and "
//     }
// }
// export const convert: IConvertFunc  = (value:number,  exact = false)=>{
//      if(numbersMap.has(value.toString())){
//          const oneUnit = (exact && value>=100 && value % 100 ===0) ? "one " : "";
//          return `${oneUnit}${numbersMap.get(value.toString()) as string}`;
//      } else {
//          const length = value.toString().length;
//          //let joiner = length <=2? "-" : length==3? " and ": ", ";
//          const zeros = length -1;
//          const tens = Math.pow(10,zeros <=3? zeros : zeros - zeros%3);
//          const full  =  value - value % tens ;
//          const residual = value % tens;
//          return residual ===0? `${convert(Math.floor(value/tens))} ${convert(tens)}`
//               :  `${convert(full,true)}${joiner(full,residual)}${convert(residual)}`;
//      }
// };


export  class English implements ILanguage {
    readonly numberToWordMap: Map<string, string>;
    readonly name: string = LANGUAGES.En;

    constructor() {
        this.numberToWordMap = new Map<string, string>();
        const zeroToTen = ["zero", "one", "two",
            "three", "four", "five",
            "six", "seven", "eight", "nine"];


        const tenToNineteen = ["ten", "eleven", "twelve",
            "thirteen", "fourteen",
            "fifteen", "sixteen",
            "seventeen", "eighteen", "nineteen"];

        const twentyToNinety = ["twenty", "thirty", "forty", "fifty",
            "sixty", "seventy", "eighty", "ninety", "hundred"]

        const tensPower = ["thousand", "million", "billion", "trillion"];

        zeroToTen.forEach((value, index) => this.numberToWordMap.set(index.toString(), value));
        tenToNineteen.forEach((value, index) => this.numberToWordMap.set((index + 10).toString(), value));
        twentyToNinety.forEach((value, index) => this.numberToWordMap.set((index * 10 + 20).toString(), value));
        tensPower.forEach((value, index) => this.numberToWordMap.set((Math.pow(10, index * 3 + 3)).toString(), value));
    }

    joiner(firstPart: number, secondPart: number) {
        const first = firstPart.toString().length;
        const second = secondPart.toString().length;
        if (first === 2 && second == 1) {
            return "-";
        }
        //hundres, tousends and millions not connected with and
        if (first > 3 && second >= 3) {
            return ", "
        } else {
            return " and "
        }
    }

    // @ts-ignore
    convert(value: number, exact = false) {
        if (this.numberToWordMap.has(value.toString())) {
            const oneUnit = (exact && value >= 100 && value % 100 === 0) ? "one " : "";
            return `${oneUnit}${this.numberToWordMap.get(value.toString()) as string}`;
        } else {
            const length = value.toString().length;
            const zeros = length - 1;
            const tens = Math.pow(10, zeros <= 3 ? zeros : zeros - zeros % 3);
            const full = value - value % tens;
            const residual = value % tens;
            return residual === 0 ? `${this.convert(Math.floor(value / tens))} ${this.convert(tens)}`
                : `${this.convert(full, true)}${this.joiner(full, residual)}${this.convert(residual)}`;
        }
    }
}
