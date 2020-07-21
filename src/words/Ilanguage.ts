export interface ILanguage {
  readonly name: string;
  readonly numberToWordMap: Map<string, string>;
  joiner: (firstPart: number, secondPart: number) => string;
  convert: (value: number, exact?: boolean) => string;
}
