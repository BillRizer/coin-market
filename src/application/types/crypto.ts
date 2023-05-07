export interface IHistorygram {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
export interface ICrypto {
  id: number;
  label: string;
  abbreviated: string;
  unit: number;
  change: number;
  historygram: Array<IHistorygram>;
  icon?: string;
}

export interface ICryptos {
  [key: string]: ICrypto;
}
