interface IHistorygram {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
export interface ICryptoDto {
  id: number;
  label: string;
  abbreviated: string;
  unit: number;
  change: number;
  historygram: Array<IHistorygram>;
}
export interface ICryptosDto extends Array<ICryptoDto> {}

export interface IMarqueeCotationDto {
  label: string;
  value: number;
  change: number;
}
export interface IMarqueeCotationsDto extends Array<IMarqueeCotationDto> {}
