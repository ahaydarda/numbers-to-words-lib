export interface ILanguage {
  readonly name: string;
  readonly numberToWordMap: Map<string, string>;
  convert: (value: number, exact?: boolean) => string;
}
