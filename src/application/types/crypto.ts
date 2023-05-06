export interface ICrypto {
  icon: string;
  label: string;
  abbreviated: string;
}
export interface  ICryptos {
  [key: string]: ICrypto;
}
