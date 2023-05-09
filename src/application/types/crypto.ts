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

interface IListItemCrypto {
  abbrev: string;
  label: string;
  icon?: string;
}
export interface IListCrypto extends Array<IListItemCrypto> {}

export interface IMarqueeCotation {
  label: string;
  value: number;
  change: number;
}

export interface IMarqueeCotations extends Array<IMarqueeCotation> {}
