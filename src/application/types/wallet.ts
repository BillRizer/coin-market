interface IItem {
  amount: number;
}
export interface IWallet {
  [key: string]: IItem;
}
